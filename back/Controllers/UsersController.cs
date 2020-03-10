using System.Collections.Generic;
using CSX_Server.Context;
using CSX_Server.Models;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using System;
using Microsoft.AspNetCore.Authorization;
using Authentication.Common;
using System.Security.Cryptography;
using WebApi.Helpers;
using Pliq.Common;

namespace CSX_Server.Controllers
{
    //[Authorize("Bearer")]
    [Produces("application/json")]
    [Route("api/Users")]
    [ApiController]
    public class UsersController : ControllerBase  
    { 
        private readonly CsxContext _csxContext;
        private readonly AppSettings _appSettings;

        public UsersController(CsxContext csxContext, AppSettings appSettings  )
        {
            _csxContext = csxContext;
            _appSettings = appSettings;
        }
 
        [HttpPost, Route("AddUser")] 
        public IActionResult AddUser([FromBody]UserSimple User)
        {
            try{
                if (User.email == null)
                    return Unauthorized(new { error = "Email not found." });

                if (!Helpers.IsValidEmail(User.email))
                    return Unauthorized(new { error = "Formato do email inválido." });

                if (User.language == null)
                    return Unauthorized(new { error = "Language not found." });

                if (User.company_name == null)
                    return Unauthorized(new { error = "Company name not found." });

                if (User.phone == null)
                    return Unauthorized(new { error = "Phone not found." });

                //TODO: Verificar posteriormente o formato do páis.
                if (!Helpers.IsValidPhone(User.phone, "BR"))
                    return Unauthorized(new { error = "Formato de telefone inválido." });

                var email = _csxContext.Users.Any(x => x.email == User.email);

                if (email)
                    return NotFound(MessageEmailExists(User.language));

                var user = DefaultValues(User);            
                var tokenString = Token.Factory(user);
                //Result is the token.
                return Ok(new
                {
                    authenticated = true,
                    accessToken = tokenString
                });
            }
            catch(Exception ex){
                return Unauthorized(new{
                    autenticated = false,
                    error = "Create user error!",
                    ex = ex
                });
                throw ex;
            }
        }

        private string MessageEmailExists(string language)
        {
            return language == "pt" ? "Esse e-mail já existe, utilize outro!" : "This email already exists!";
        }

        [HttpGet, Route("getUsers")] 
        public IList<Users> UsersList()
        {
            return _csxContext.Users.ToList();
        }

        [HttpGet,Route("getUserById/{id_user}")]
        public Users getUserById(decimal id_user)
        {
            var userLog = (from user in _csxContext.Users
                        where user.id_user == id_user
                        select new Users{
                            id_user = user.id_user,
                            full_name = user.full_name,
                            email = user.email,
                            Companies = (from companie in _csxContext.Companies
                                        where companie.id_company == user.fk_company_default
                                        select new Companies{
                                            id_company = companie.id_company,
                                            full_name = companie.full_name,
                                            site = companie.site,   
                                            plan = companie.plan                                         
                                        }).ToList()
                        }).FirstOrDefault();
                        
            return userLog;
        }

        public Users DefaultValues(UserSimple User)
        {
            var password = User.password;
            var password_origem = User.password;
            using (MD5 md5Hash = MD5.Create())
            {
                password = Token.GetMd5Hash(md5Hash, User.password);
            }
            Companies _companie = new Companies();
            Users _user = new Users();

            //Default data User
            _user.full_name = User.full_name;
            _user.email = User.email;
            _user.password = password;
            _user.createdat = DateTime.Now;
            _user.last_acess = DateTime.Now;
            _user.type_user = 1;
            _user.fk_company_default = _companie.id_company;
            _user.phone = User.phone;
            _csxContext.Users.Add(_user);            

            //Default data Company
            _companie.full_name = User.company_name;
            _companie.createdat = DateTime.Now;
            _companie.fk_user_create = _user.id_user;
            _companie.days_contract = 30;
            _companie.plan = "FREE";
            _csxContext.Companies.Add(_companie);

            CompanyUsers _companieUser = new CompanyUsers();
            _companieUser.fk_user = _user.id_user;
            _companieUser.fk_user_create = _user.id_user;
            _companieUser.fk_company = _companie.id_company;
            _companieUser.createdat = DateTime.Now;
            _companieUser.updatedat = DateTime.Now;
            _companieUser.fk_role = 1;
            _csxContext.CompanyUsers.Add(_companieUser);

            Surveys _survey = new Surveys();
            _survey.title = DefaultSurveyTitle(User.language);
            _survey.description = DefaultSurveyDescription(User.language);
            _survey.active = true;
            _survey.fk_company = _companie.id_company;
            _survey.createdat = DateTime.Now;
            _survey.updatedat = DateTime.Now;
            _survey.fk_user_create = _user.id_user;
            _survey.language = DefaultLanguage(User.language);
            _csxContext.Surveys.Add(_survey);

            _csxContext.SaveChanges();
            
            //Update CompanyId on User
            var newUser = _csxContext.Users.Find(_user.id_user);
            newUser.fk_company_default = _companie.id_company;
            _csxContext.Users.Update(newUser);

            //Generate MD5 URL Survey
            var newSurvey = _csxContext.Surveys.Find(_survey.id_survey);
            _csxContext.Surveys.Update(newSurvey);
            _csxContext.SaveChanges();
            
            //TODO: Configurar email e tirar comentário
            //SendEmail.WelcomeUser(_user, _companie, password_origem);            
            return _user;
        }

        private string DefaultSurveyMessageEmail(string language)
        {
            return language == "pt" ? @"<table style='background-color: #fafafa;'>
    <tbody><tr>
        <td style='text-align: center;'><img alt='Logo Empresa' style='height: 100px;' src='{UrlLogo}'>
    </td></tr>
    <tr>
        <td style='font-size: large;
        font-family: Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif;
        color: #050C1E;
        padding-top: 40px;
        padding-left: 60px;'>Olá {FirstName},</td>
    </tr>
    <tr>
        <td style='font-size: medium;
        font-family: Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif;
        color: #050C1E;
        padding-top: 16px;
        padding-left: 60px;'>
<p>
Queremos saber como foi sua experiência conosco com <b style='color: #c41648;'>1 pergunta em 20 segundos</b>. 
<br/>
<br/>{LinkNPS}
<br/>Para responder basta 1 clique!
<br/>
</p>
</td>
    </tr>
    <tr>
        <td style='font-size: small;
        font-family: Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif;
        color: #050C1E;
        text-align: right;'>Atenciosamente</td>
    </tr>
<tr>
    <td style='font-size: x-small;
    font-family: Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif;
    color: #050C1E;
    text-align: center;'>
    <hr>    
    Algum erro ? <a href='{LinkSurvey}'> Vamos por aqui </a>. <br/><br/>
    <a href='https://www.explique.com.br'><img alt='Logo eXplique' style='height: 25px;' src='https://www.explique.com.br/wp-content/uploads/2020/01/PliQ-sunrise-logomarca-comnome-small-preto-3.png'></a></td>
</tr>    
</tbody></table>" : 
                @"";
        }

        private string DefaultFeedbackTitle(string language)
        {
            return language == "pt" ? "Ajude-nos a entender a sua escolha." : "Help us by explanning your score.";
        }

        private string DefaultHighScore(string language)
        {
            return language == "pt" ? "Muito provável" : "Very likely";
        }

        private string DefaultLowScore(string language)
        {
            return language == "pt" ? "Pouco provável" : "Very unlikely";
        }

        private static string DefaultSurveyDescription(string language)
        {
            return language == "pt" ? "Queremos melhorar nossa empresa com sua ajuda." : "We want to improve our company with your help.";
        }

        private static string DefaultSurveyTitle(string language)
        {
            return language == "pt" ? "Pesquisa de NPS" : "Survey NPS";
        }

        private static string DefaultLanguage(string language)
        {
            return language == "pt" ? "pt_BR" : "en_US";
        }
    }
}