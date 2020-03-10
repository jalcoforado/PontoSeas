

using System;
using System.Threading.Tasks;
using CSX_Server.Context;
using CSX_Server.Models;

namespace CSX_Server.Business{

    public class ActionBusiness{

        private readonly CsxContext _csxContext;

        public ActionBusiness(CsxContext csxContext){
            _csxContext = csxContext;
        }

        public Actions Save(Actions action){
            try
            {
                action.createdat = DateTime.Now;
                _csxContext.Actions.Add(action);
                _csxContext.SaveChanges();

                return action;
            }
            catch (System.Exception ex)
            {
                throw ex;
            }
        }

        public Actions Save(Users user, string type, string message){
            try
            {
                var action = this.Save(user, type, message, 0, null);
                return action;
            }
            catch (System.Exception ex)
            {
                throw ex;
            }
        }

        public Actions Save(Users user, string type, string message, int credits){
            try
            {
                var action = this.Save(user, type, message, credits, null);
                return action;
            }
            catch (System.Exception ex)
            {
                throw ex;
            }
        }
        public Actions Save(Users user, string type, string message, int credits, int? surveyId){
            try
            {
                var action = new Actions();
                action.fk_user_create = user.id_user;
                action.fk_company = user.fk_company_default;
                action.type = type;
                action.message = message;
                action.createdat = DateTime.Now;
                action.credits = credits;
                action.fk_survey = surveyId;
                _csxContext.Actions.Add(action);
                _csxContext.SaveChanges();

                return action;
            }
            catch (System.Exception ex)
            {
                throw ex;
            }
        }

        public async Task SaveAsync(Users user, string type, string message){
            try
            {
                await SaveAsync(user, type, message, 0);
            }
            catch (System.Exception ex)
            {
                throw ex;
            }
        }

        public async Task SaveAsync(Users user, string type, string message, int credits){
            try
            {
                await SaveAsync(user, type, message, credits, null);            
            }
            catch (System.Exception ex)
            {
                throw ex;
            }
        }

        public async Task SaveAsync(Users user, string type, string message, int credits, int? surveyId){
            try
            {
                var action = new Actions();
                action.fk_user_create = user.id_user;
                action.fk_company = user.fk_company_default;
                action.type = type;
                action.message = message;
                action.createdat = DateTime.Now;
                action.credits = credits;
                action.fk_survey = surveyId;
                _csxContext.Actions.Add(action);
                await _csxContext.SaveChangesAsync();
            }
            catch (System.Exception ex)
            {
                throw ex;
            }
        }

        public async Task SaveAsync(decimal id_user, decimal id_company, string type, string message){
            try
            {
                var action = new Actions();
                action.fk_user_create = id_user;
                action.fk_company = id_company;
                action.type = type;
                action.message = message;
                action.createdat = DateTime.Now;
                _csxContext.Actions.Add(action);
                await _csxContext.SaveChangesAsync();
            }
            catch (System.Exception ex)
            {
                throw ex;
            }
        }
    }

}