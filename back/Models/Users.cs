using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using PliQ.Models;

namespace CSX_Server.Models
{
    [Table("users", Schema = "general")]
    public partial class Users
    {
        public decimal id_user { get; set; }
        public string full_name { get; set; }
        public string email { get; set; }
        public string password { get; set; }
        public DateTime? last_acess { get; set; }
        public DateTime createdat { get; set; }
        public DateTime? updatedat { get; set; }
        public int? type_user { get; set; }
        public decimal fk_company_default { get; set; }
        public decimal? fk_department { get; set; }
        public virtual ICollection<Companies> Companies { get; set; }
        public virtual ICollection<Surveys> Surveys { get; set; }
        public virtual ICollection<CompanyUsers> CompanyUsers { get; set; }
        public virtual ICollection<Actions> Actions { get; set; }
        public virtual ICollection<Tokens> Tokens { get; set; }
        public virtual Department Department { get; set; }
        public string phone { get; set; }
        public string url_image { get; set; }
    }
}
