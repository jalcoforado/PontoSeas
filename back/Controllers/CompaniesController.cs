using System.Collections.Generic;
using CSX_Server.Context;
using CSX_Server.Models;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Microsoft.AspNetCore.Authorization;
using System;
using System.Security.Cryptography;
using Authentication.Common;

namespace CSX_Server.Controllers
{
    // [Authorize("Bearer")]
    [Produces("application/json")]
    [Route("api/Companies")]
    public class CompaniesController : ControllerBase
    {
        private readonly CsxContext _csxContext;

        public CompaniesController(CsxContext csxContext)
        {
            _csxContext = csxContext;
        }

        [HttpGet, Route("getCompanieById/{id_company}")]
        public Companies getCompanieById(decimal id_company)
        {
            return _csxContext.Companies.Find(id_company);
        }

        [HttpGet, Route("getCompanies")]
        public IList<Companies> CompaniesList()
        {
            return _csxContext.Companies.ToList();
        }

        [HttpPost, Route("updateCompanie")]
        public IActionResult updateCompanie([FromBody] Companies Companie)
        {
            _csxContext.Companies.Update(Companie);
            _csxContext.SaveChanges();
            return Ok();
        }

        [HttpGet, Route("getUsersByCompanie/{id_companie}")]
        public IList<Users> getUsersByCompanie(decimal id_companie)
        {
            return _csxContext.Users.Where(x => x.fk_company_default == id_companie).ToList();
        }

        [HttpPost, Route("newUserCompanie")]
        public IActionResult newUserCompanie([FromBody] Users user)
        {
            try
            {
                var verifyEmail = _csxContext.Users.Where(x => x.email == user.email).FirstOrDefault();
                if(verifyEmail != null)
                 return Unauthorized(new { error = "This email is already registered." });

                using (MD5 md5Hash = MD5.Create())
                {
                    user.password = Token.GetMd5Hash(md5Hash, "123456");
                }
                user.createdat = DateTime.Now;
                _csxContext.Users.Add(user);
                _csxContext.SaveChanges();
                return Ok();
            }
            catch (Exception ex)
            {
                return Unauthorized(new
                {
                    autenticated = false,
                    error = "Create user error!",
                    ex = ex
                });
                throw ex;
            }
        }
    }
}