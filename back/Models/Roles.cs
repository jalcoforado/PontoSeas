using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace CSX_Server.Models
{
    [Table("roles", Schema = "general")]
    public partial class Roles
    {
        public decimal id_role { get; set; }
        public string title { get; set; }
        public string description { get; set; }
        public bool administrator { get; set; }
        public string permissions { get; set; }
        public DateTime createdat { get; set; }
        public DateTime? updatedat { get; set; }
        public virtual ICollection<CompanyUsers> CompanyUsers { get; set; }
    }
}
