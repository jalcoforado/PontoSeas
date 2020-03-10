using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace CSX_Server.Models
{
    [Table("company_users", Schema = "business")]
    public partial class CompanyUsers
    {
        public decimal id_company_user { get; set; }
        public decimal fk_company { get; set; }
        public decimal fk_user { get; set; }
        public decimal fk_role { get; set; }
        public DateTime createdat { get; set; }
        public DateTime? updatedat { get; set; }
        public DateTime? deletedat { get; set; }
        public decimal fk_user_create { get; set; }
        public decimal? fk_user_update { get; set; }
        public decimal? fk_user_delete { get; set; }
        public virtual Roles Roles { get; set; }
        public virtual Companies Companies { get; set; }
        public virtual Users Users { get; set; }
    }
}
