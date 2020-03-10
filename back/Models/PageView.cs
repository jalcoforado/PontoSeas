using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace CSX_Server.Models
{
    [Table("page_view", Schema = "business")]
    public partial class PageView
    {
        public decimal idpageview { get; set; }
        public decimal fk_survey { get; set; }
        public DateTime acessdate { get; set; }             
        public string device_info { get; set; }
        public virtual Surveys Surveys {get; set; }

    }
}
