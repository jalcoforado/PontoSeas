using System.Collections.Generic;
using CSX_Server.Context;
using CSX_Server.Models;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Authorization;
using System;
using System.Text;
using Authentication.Common;
using System.Security.Cryptography;
using CSX_Server.Business;
using System.Security.Claims;

namespace CSX_Server.Controllers
{
    //[EnableCors("AllowSpecificOrigin")]
    // [Authorize("Bearer")]
    [Produces("application/json")]
    [Route("api/Login")]
    [ApiController]
    public class LoginController : ControllerBase  
    { 
        private readonly CsxContext _csxContext;

        public LoginController(CsxContext csxContext)
        {
            _csxContext = csxContext;
        }

        [AllowAnonymous]
        [EnableCors("AllowSpecificOrigin")]
        [HttpPost, Route("Security")] 
        public IActionResult Security([FromBody]Users User)
        {
            try
            {
                if (User.email == null)
                    return Unauthorized(new { error = "E-mail não encontrado." });
                if (User.password == null)
                    return Unauthorized(new { error = "Senha não encontrada." });

                var password = User.password;

                using (MD5 md5Hash = MD5.Create())
                {
                    password = Token.GetMd5Hash(md5Hash, User.password);
                }

                var user = _csxContext.Users.Where(x => x.email == User.email && x.password == password).First();
                var tokenString = Token.Factory(user);

                //Action Login
                var actionBusiness = new ActionBusiness(_csxContext);
                string type = "Login";
                string message = string.Format("Usuário {0} efetuou login.", user.full_name);
                var action = actionBusiness.Save(user, type, message);

                UpdateLastAccess(user);
                //Limpando a senha
                user.password = "";
                //Result is the token.
                return Ok(new
                {
                    authenticated = true,
                    accessToken = tokenString
                });


            }
            catch (Exception ex){
                return Unauthorized(new{
                    autenticated = false,
                    error = "E-mail ou senha inválido!",
                    ex = ex
                });
                throw ex;
            }
        }

        private void UpdateLastAccess(Users user)
        {
            //Last access update
            user.last_acess = DateTime.Now;
            _csxContext.Users.Update(user);
            _csxContext.SaveChanges();
        }

        [AllowAnonymous]
        [EnableCors("AllowSpecificOrigin")]
        [HttpPost, Route("RecoveryPassword")] 
        public IActionResult RecoveryPassword([FromBody]Users User)
        {
            try
            {
                if (User.email == null)
                    return Unauthorized(new { error = "E-mail não encontrado." });

                var user =  _csxContext.Users.Where(x => x.email == User.email).First();

                //Can change if user exists!
                var newpass = GenerateToken(4);//System.Web.Security.GeneratePassword(8, 20);
                using (MD5 md5Hash = MD5.Create())
                {
                    user.password = Token.GetMd5Hash(md5Hash, newpass);
                }
                _csxContext.Users.Update(user);
                _csxContext.SaveChanges();

                //Result is the token.
                SendEmail.RecoveryPassword(user, newpass);
                return Ok(new
                {
                    send = true,
                    email = User.email
                });
            }
            catch(Exception ex){
                return Unauthorized();
                throw ex;
            }
        } 
        public string GenerateToken(int length)
        {
            RNGCryptoServiceProvider cryptRNG = new RNGCryptoServiceProvider();
            byte[] tokenBuffer = new byte[length];
            cryptRNG.GetBytes(tokenBuffer);
            return Convert.ToBase64String(tokenBuffer);
        }

        [AllowAnonymous]
        [HttpGet, Route("Status")]
        public IActionResult Status(){
            return Ok(new {  version = Environment.Version});
        }

        
        [HttpGet, Route("UserDetail")]
        [Authorize("Bearer")]
        public IActionResult UserDetail(){
            var id = SecurityBusiness.IdUser(HttpContext);
            var id_company = SecurityBusiness.IdCompany(HttpContext);

            return Ok(new {  
                id = id,
                companyId = id_company,
                name = User.Identity.Name}
            );
        }
    }
}