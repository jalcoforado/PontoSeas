using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CSX_Server.Models
{
    public partial class UserSimple
    {
        public string full_name { get; set; }
        public string email { get; set; }
        public string password { get; set; }
        public string language { get; set; }
        public string company_name { get; set; }
        public string phone { get; set; }
    }
}
