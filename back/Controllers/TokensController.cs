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
using PliQ.Models;

namespace PliQ.Controllers
{
    [Authorize("Bearer")]
    [Produces("application/json")]
    [Route("api/Tokens")]
    public class TokensController : ControllerBase
    {
        private readonly CsxContext _csxContext;

        public TokensController(CsxContext csxContext)
        {
            _csxContext = csxContext;
        }

        [HttpGet, Route("All")]
        public List<Tokens> getAll()
        {
            var idCompany = SecurityBusiness.IdCompany(HttpContext);
            return _csxContext.Tokens.Where(x => x.fk_company == idCompany).ToList();
        }

        [HttpPost, Route("save")]
        public IActionResult saveToken()
        {
            try
            {
                Tokens token = new Tokens();
                var idCompany = SecurityBusiness.IdCompany(HttpContext);
                var idUser = SecurityBusiness.IdUser(HttpContext);

                if(idCompany == 0)
                    return BadRequest(new{
                        errorMessage = "Empresa não encontrada."
                });
                
                token.active        = true;
                token.createdat     = DateTime.Now;
                token.code          = Guid.NewGuid();
                token.fk_company    = idCompany;
                token.fk_user_create = idUser;
                _csxContext.Tokens.Add(token);
                _csxContext.SaveChanges();

                return Ok(token);
            }
            catch (System.Exception ex)
            {
                return NotFound("Erro ao Salvar: " + ex.Message);
            }
        }
    }
}