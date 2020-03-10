using Microsoft.AspNetCore.Authorization;
using System.Collections.Generic;
using System.Linq;
using CSX_Server.Context;
using CSX_Server.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Runtime.Serialization.Json;
using System;
using Authentication.Common;
using System.Security.Cryptography;
using CSX_Server.Business;
using System.Threading.Tasks;
using Pliq.Common;
using Microsoft.Extensions.Configuration;

namespace CSX_Server.Controllers
{
    // [Authorize("Bearer")]
    [Produces("application/json")]
    [Route("api/Survey")]
    public class SurveyController : ControllerBase
    {
        private readonly IConfiguration _config;

        private readonly CsxContext _csxContext;

        public SurveyController(CsxContext csxContext, IConfiguration config)
        {
            _csxContext = csxContext;
             _config = config;
        }

        [HttpPost, Route("newSurvey")]
        public IActionResult newSurvey([FromBody]Surveys survey)
        {
            try
            {
                survey.language = String.IsNullOrEmpty(survey.language) ? "pt_BR" : survey.language;
                survey.createdat = DateTime.Now;
                survey.active = true;
                _csxContext.Surveys.Add(survey);
                _csxContext.SaveChanges();

                //New Survey
                var actionBusiness = new ActionBusiness(_csxContext);
                var user = _csxContext.Users.Find(survey.fk_user_create);
                string type = "NewSurvey";
                string message = string.Format("O Usuário [{0}] criou uma nova pesquisa [{1}].", user.full_name, survey.title);
                var action = actionBusiness.Save(user, type, message, 0, (int)survey.id_survey);

                return Ok();
            }
            catch (System.Exception ex)
            {
                return NotFound(ex);
            }

        }

        [HttpPost, Route("updateSurvey")]
        public IActionResult updateSurvey([FromBody]Surveys survey)
        {
            try
            {
                survey.updatedat = DateTime.Now;
                //survey.message_whatsapp = Helpers.HtmlToWhatsApp(survey.message_whatsapp);
                _csxContext.Surveys.Update(survey);
                _csxContext.SaveChanges();

                //Update Survey
                var actionBusiness = new ActionBusiness(_csxContext);
                var user = _csxContext.Users.Find(survey.fk_user_create);
                string type = "UpdateSurvey";
                string message = string.Format("O Usuário [{0}] atualizou a pesquisa [{1}].", user.full_name, survey.title);
                var action = actionBusiness.Save(user, type, message, 0, (int)survey.id_survey);

                return Ok();
            }
            catch (System.Exception ex)
            {
                return NotFound(ex);
            }
        }

        [HttpGet, Route("getSurveyById/{id_survey}/{id_company}")]
        public Surveys getSurveyById(decimal id_survey, int id_company)
        {
            var teste = (from survey in _csxContext.Surveys
                         where (survey.id_survey == id_survey
                         && survey.deletedat == null
                         && survey.fk_company == id_company)
                         select new Surveys
                         {
                             id_survey = survey.id_survey,
                             title = survey.title,
                             description = survey.description,
                             active = survey.active,
                             createdat = survey.createdat,
                             fk_company = survey.fk_company,
                             fk_user_create = survey.fk_user_create,
                             color_button = survey.color_button,
                             language = survey.language,
                         }).FirstOrDefault();

            return teste;
        }


        [HttpPost, Route("saveSurvey")]
        public IActionResult saveSurvey([FromBody] Surveys survey)
        {
            try
            {
                survey.active = true;
                survey.createdat = DateTime.Now;
                _csxContext.Surveys.Add(survey);
                _csxContext.SaveChanges();

                //Save Survey
                var actionBusiness = new ActionBusiness(_csxContext);
                var user = _csxContext.Users.Find(survey.fk_user_create);
                string type = "SaveSurvey";
                string message = string.Format("Usuário {0} salvou o survey {1} com o id {2}.", user.full_name, survey.title);
                var action = actionBusiness.Save(user, type, message, 0, (int)survey.id_survey);

                return Ok();
            }
            catch (System.Exception)
            {
                return NotFound("Erro ao Salvar");
            }
        }

        [HttpGet, Route("SurveysByCompanyId/{id_company}")]
        public IList<Surveys> getSurveyByCompanyId(decimal id_company)
        {
            try
            {
                var surveys = (from survey in _csxContext.Surveys
                               let responsesCount = 0
                               let contactsCount = 0
                               where survey.fk_company == id_company && survey.deletedat == null

                               select new Surveys
                               {
                                   id_survey = survey.id_survey,
                                   title = survey.title,
                                   description = survey.description,
                                   createdat = survey.createdat,
                                   active = survey.active,
                                   fk_user_create = survey.fk_user_create,
                                   fk_company = survey.fk_company,
                                   responses = responsesCount,
                                   contacts = contactsCount
                                }
                ).OrderBy(x => x.id_survey).ToList();
                return surveys;
            }
            catch (System.Exception ex)
            {
                throw ex;
            }

        }

        [HttpPost, Route("gerateCopyTheSurvey/{id_survey}")]
        public IActionResult gerateCopyTheSurvey(decimal id_survey)
        {
            var surveyCopy = (from survey in _csxContext.Surveys
                              where survey.id_survey.Equals(id_survey) && survey.deletedat == null
                              select new Surveys
                              {
                                  title             = "Clone - " + survey.title,
                                  description       = survey.description,
                                  language          = survey.language,
                                  active            = true,
                                  fk_company        = survey.fk_company,
                                  createdat         = DateTime.Now,
                                  fk_user_create    = survey.fk_user_create,
                                  color_button      = survey.color_button,
                              }).FirstOrDefault();

            _csxContext.Surveys.Add(surveyCopy);
            _csxContext.SaveChanges();

            //Copy Survey
            var actionBusiness = new ActionBusiness(_csxContext);
            var user = _csxContext.Users.Find(surveyCopy.fk_user_create);
            string type = "CopySurvey";
            string message = string.Format("O Usuário [{0}] copiou a pesquisa [{1}].", user.full_name, surveyCopy.title);
            var action = actionBusiness.Save(user, type, message, 0, (int)surveyCopy.id_survey);

            return Ok(surveyCopy.id_survey);
        }

        [HttpPost, Route("updateActive/{id_survey}")]
        public async Task<IActionResult> updateActive(decimal id_survey)
        {
            try
            {
                var survey = _csxContext.Surveys.Find(id_survey);
                survey.active = !survey.active;
                _csxContext.Surveys.Update(survey);
                await _csxContext.SaveChangesAsync();

                //Status Survey
                var actionBusiness = new ActionBusiness(_csxContext);
                var user = _csxContext.Users.Find(survey.fk_user_create);
                string type = survey.active ? "SurveyActived" : "SurveyDisabled";
                string message = string.Format("Usuário {0} atualizou o status do survey {1} com o id {2}.", user.full_name, survey.title, survey.id_survey);
                await actionBusiness.SaveAsync(survey.fk_user_create, survey.fk_company, type, message);

                return Ok();
            }
            catch (System.Exception ex)
            {
                return NotFound(ex);
            }
        }

        [HttpPost, Route("deleteSurvey")]
        public IActionResult deleteSurvey([FromBody]Surveys survey)
        {
            try
            {
                survey.deletedat = DateTime.Now;
                _csxContext.Surveys.Update(survey);
                _csxContext.SaveChanges();

                //Delete Survey
                var actionBusiness = new ActionBusiness(_csxContext);
                var user = _csxContext.Users.Find(survey.fk_user_create);
                string type = "SurveyDeleted";
                string message = string.Format("Usuário {0} deletou o survey {1} com o id {2}.", user.full_name, survey.title, survey.id_survey);
                var action = actionBusiness.Save(user, type, message);

                return Ok();
            }
            catch (System.Exception ex)
            {
                return NotFound(ex);
            }
        }
    }
}