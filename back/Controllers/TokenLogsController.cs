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
    [Route("api/TokenLogs")]
    public class TokenLogsController : ControllerBase
    {
        private readonly CsxContext _csxContext;

        public TokenLogsController(CsxContext csxContext)
        {
            _csxContext = csxContext;
        }

        [HttpGet, Route("getByCompany")]
        public List<TokenLogs> getByCompany()
        {
            var idCompany = SecurityBusiness.IdCompany(HttpContext);

            var logs = (from tokenLog in _csxContext.TokenLogs
                           join token in _csxContext.Tokens
                             on tokenLog.fk_token equals token.id_token
                              where token.fk_company == idCompany

                            select new TokenLogs
                            {
                                ip = tokenLog.ip,
                                http_method = tokenLog.http_method,
                                status = tokenLog.status,
                                createdat = tokenLog.createdat,
                                url_method = tokenLog.url_method
                            }
                          ).OrderByDescending(x => x.createdat).ToList();

            return logs;
        }

        [HttpGet, Route("getByToken/{idToken}")]
        public List<TokenLogs> getByToken(int idToken)
        {
            return _csxContext.TokenLogs.Where(x => x.fk_token == idToken).ToList();
        }

        [HttpPost, Route("save")]
        public IActionResult saveTokenLogs([FromBody]TokenLogs tokenLog)
        {
            try
            {
                tokenLog.createdat = DateTime.Now;
                _csxContext.TokenLogs.Add(tokenLog);
                _csxContext.SaveChanges();

                return Ok(tokenLog);
            }
            catch (System.Exception ex)
            {
                return NotFound("Erro ao Salvar: " + ex.Message);
            }
        }
    }
}