using Microsoft.AspNetCore.Authorization;
using System.Collections.Generic;
using CSX_Server.Context;
using CSX_Server.Models;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using Microsoft.EntityFrameworkCore;

namespace CSX_Server.Controllers
{
    [Produces("application/json")]
    [Route("api/Department")]
    public class DepartmentController : ControllerBase
    {
        private readonly CsxContext _csxContext;

        public DepartmentController(CsxContext csxContext)
        {
            _csxContext = csxContext;
        }

        [HttpGet, Route("getUserDepartment/{fk_company}")]
        public IList<Department> getUserDepartment(decimal fk_company)

        {

            var Department = (from department in _csxContext.Department
                              where department.fk_company == fk_company
                              select new Department
                              {
                                  id_department = department.id_department,
                                  name = department.name,
                                  actived = department.actived,
                                  fk_company = department.fk_company,
                                  createdat = department.createdat,
                                  fk_user_create = department.fk_user_create,
                                  Users = _csxContext.Users.Where(x => x.fk_department == department.id_department).ToList()
                              }).ToList();
            return Department;
        }

        [HttpPost, Route("saveDepartment")]
        public IActionResult saveDepartment([FromBody]Department department)
        {
            try
            {
                department.createdat = DateTime.Now;
                _csxContext.Department.Add(department);
                _csxContext.SaveChanges();
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex);
            }
        }

    }
}