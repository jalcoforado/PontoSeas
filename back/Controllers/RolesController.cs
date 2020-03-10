
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
    [Route("api/Roles")]
    public class RolesController : ControllerBase
    {
        private readonly CsxContext _csxContext;

        public RolesController(CsxContext csxContext)
        {
            _csxContext = csxContext;
        }

        [HttpGet, Route("getRoles")]
        public IList<Roles> RolesList()
        {
            return _csxContext.Roles.ToList();
        }
        
    }
}