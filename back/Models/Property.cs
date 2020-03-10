using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace CSX_Server.Models
{
    public partial class Property
    {
        public string BackgroundColor { get; set; }
        public string Color { get; set; }
    }
}
