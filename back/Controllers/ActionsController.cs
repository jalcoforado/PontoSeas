using Microsoft.AspNetCore.Authorization;
using System.Collections.Generic;
using CSX_Server.Context;
using CSX_Server.Models;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using CSX_Server.Business;

namespace CSX_Server.Controllers
{
    [Produces("application/json")]
    [Route("api/Actions")]
    public class ActionsController : ControllerBase
    {
        private readonly CsxContext _csxContext;

        public ActionsController(CsxContext csxContext)
        {
            _csxContext = csxContext;
        }

        [HttpGet, Route("getByCompany/{idCompany}")]
        public List<Actions> getByCompany(int idCompany)
        {
            return _csxContext.Actions.Where(x => x.fk_company == idCompany).ToList();
        }

        [HttpGet, Route("getByCompanyByUser/{idCompany}/{IdUser}")]
        public List<Actions> getByCompanyByUser(int idCompany, int idUser)
        {
            return _csxContext.Actions.Where(x => x.fk_company == idCompany 
                                            && x.fk_user_create == idUser).ToList();
        }

        [HttpPost, Route("save")]
        public IActionResult saveAction([FromBody]Actions action)
        {
            try
            {
                var actionBusiness = new ActionBusiness(_csxContext);
                var result = actionBusiness.Save(action);

                return Ok();
            }
            catch (System.Exception ex)
            {
                return NotFound("Erro ao Salvar: " + ex.Message);
            }
        }
    }
}