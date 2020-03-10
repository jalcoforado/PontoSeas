
using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using CSX_Server.Context;
using CSX_Server.Models;
using Integration.Model;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using WebApi.Helpers;

namespace CSX_Server.Business{

    public class NotificationBusiness{

        public static void SendChatBot(CsxContext _csxContext, AppSettings _appSettings, string URL_NOTIFICATION, Notification dados){
            var _chatboturl = "URL" + URL_NOTIFICATION;
            //Add participant_key if phone is null.
            dados.phone = string.IsNullOrEmpty(dados.phone) ? dados.participant_key : dados.phone;
            //Connect with chatbotmaker.
            using(var httpClient = new HttpClient())
            {
                var content = new StringContent(JsonConvert.SerializeObject(dados, 
                new JsonSerializerSettings()
                {
                    ContractResolver = new CamelCasePropertyNamesContractResolver()
                }), Encoding.UTF8, "application/json");
                var response = httpClient.PostAsync(_chatboturl, content).Result;
            }
        }
        public static void SendEmail(CsxContext _csxContext, AppSettings _appSettings, Notification dados){
            try{
                Surveys survey = _csxContext.Surveys.Find(dados.fk_survey);
                Companies company = _csxContext.Companies.Find(survey.fk_company);
                //Send email notification
                Authentication.Common.SendEmail.Notification(dados, company);
            }catch(Exception ex){
                throw ex;
            }
        }
    }
}