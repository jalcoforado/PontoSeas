using System.Collections.Generic;
using CSX_Server.Context;
using CSX_Server.Models;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Microsoft.AspNetCore.Authorization;

namespace CSX_Server.Controllers
{
    [Authorize("Bearer")]
    [Produces("application/json")]
    [Route("api/CompanyUsers")]
    public class CompanyUsersController : ControllerBase
    {
        private readonly CsxContext _csxContext;

        public CompanyUsersController(CsxContext csxContext)
        {
            _csxContext = csxContext;
        }
        
        /*
        List Users By CompanyId
         */
        [HttpGet, Route("UsersByCompanyId/{id_company}")]
        public IList<CompanyUsers> getUsersByCompanyId(decimal id_company)
        {
            return _csxContext.CompanyUsers.Where(x => x.Companies.id_company == id_company).ToList();    
        }

        [HttpGet, Route("getCompanyUsers")]
        public IList<CompanyUsers> CompanyUsersList()
        {
            return _csxContext.CompanyUsers.ToList();
        }
        
    }
}