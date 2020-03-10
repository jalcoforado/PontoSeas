using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using PliQ.Models;

namespace CSX_Server.Models
{
    [Table("companies", Schema = "business")]
    public partial class Companies
    {
        public decimal id_company { get; set; }
        public string full_name { get; set; }
        public string site { get; set; }
        public string url_logo { get; set;}
        public DateTime createdat { get; set; }
        public DateTime? updatedat { get; set; }
        public DateTime? deletedat { get; set; }
        public decimal fk_user_create { get; set; }
        public decimal? fk_user_update { get; set; }
        public decimal? fk_user_delete { get; set; }
        public virtual ICollection<CompanyUsers> CompanyUsers { get; set; }
        public virtual Users Users { get; set; }
        public virtual ICollection<Department> Department { get; set; }
        public virtual ICollection<Surveys> Survey { get; set; }
        public string notification_phone { get; set; }
        public int days_contract { get; set; }
        public string plan { get; set; }
        //Add Contacts and contracts
        public virtual ICollection<Actions> Actions { get; set; }
        public virtual ICollection<Tokens> Tokens { get; set; }
    }
}
