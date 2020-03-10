using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace CSX_Server.Models
{
    [Table("actions", Schema = "general")]
    public partial class Actions
    {
        public decimal id_action { get; set; }
        public string type { get; set; }
        public string message { get; set; }
        public DateTime createdat { get; set; }
        public decimal fk_user_create { get; set; }
        public decimal fk_company { get; set; }
        public virtual Companies Companies { get; set; }
        public virtual Users Users { get; set; }
        public int credits {get; set;}
        public int? fk_survey {get; set;}
        //public virtual Surveys Survey { get; set; }
        //Data que foi pago o crédito
        public DateTime? payedat {get;set;}
    }
}
