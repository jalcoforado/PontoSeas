using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CSX_Server.Common;
using CSX_Server.Context;
using CSX_Server.Controllers;
using CSX_Server.Models;
using Microsoft.AspNetCore.Http;
using Pliq.Common;
using PliQ.Models;
using WebApi.Helpers;

namespace PliQ.Business{

    public class SurveyBusiness{

        private readonly CsxContext _csxContext;
        private readonly AppSettings _appSettings;

        public SurveyBusiness(CsxContext csxContext){
            _csxContext = csxContext;
        }

        public SurveyBusiness(CsxContext csxContext, AppSettings appSettings){
            _csxContext     = csxContext;
            _appSettings    = appSettings;
        }

        public Surveys GetById(decimal id_survey)
        {
            var result = (from s in _csxContext.Surveys
                         join c in _csxContext.Companies on s.fk_company equals c.id_company
                         where (s.id_survey == id_survey)

                         select new Surveys
                         {
                             id_survey = s.id_survey,
                             title = s.title,
                             description = s.description,
                             active = s.active,
                             color_button = s.color_button,
                             createdat = s.createdat,
                             language = s.language,
                             fk_user_create = s.fk_user_create,
                             fk_company = s.fk_company,
                             
                             Companies = new Companies(){
                                 id_company = c.id_company,
                                 full_name = c.full_name,
                                 plan = c.plan,
                                 url_logo = c.url_logo,
                                 fk_user_create = c.fk_user_create,
                                 days_contract = c.days_contract,
                                 notification_phone = c.notification_phone,
                                 site = c.site,
                                 createdat = c.createdat,
                                 updatedat = c.updatedat,
                                 fk_user_update = c.fk_user_update
                             }
                         }).FirstOrDefault();
            return result;
        }
        //TODO: Finalizar o método SaveList
   }

}