using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace CSX_Server.Models
{
    [Table("department", Schema = "business")]
    public partial class Department
    {
        public decimal id_department { get; set; }
        public string name { get; set;}
        public bool actived { get; set; }
        public decimal fk_company { get; set; }
        public DateTime createdat { get; set; }
        public DateTime? updatedat { get; set; }
        public DateTime? deletedat { get; set; }
        public decimal fk_user_create { get; set; }
        public decimal? fk_user_update { get; set; }
        public decimal? fk_user_delete { get; set; }

        public virtual Companies Company { get; set; }
        public virtual ICollection<Users> Users { get; set; }
    }
}
