using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace CSX_Server.Models
{
    [Table("surveys", Schema = "business")]
    public partial class Surveys
    {
        public decimal id_survey { get; set; }
        public string title { get; set; }
        public string description { get; set; }
        public string language { get; set; }
        public bool active { get; set; }
        public decimal fk_company { get; set; }
        public DateTime createdat { get; set; }
        public DateTime? updatedat { get; set; }
        public DateTime? deletedat { get; set; }
        public decimal fk_user_create { get; set; }
        public decimal? fk_user_update { get; set; }
        public decimal? fk_user_delete { get; set; }
        public string color_button { get; set;}
        public virtual Companies Companies { get; set; }
        public virtual ICollection<PageView> PageViews { get; set; }
        public virtual Users Users { get; set; }
 
        [NotMapped]
        public int responses {get; set;}
        [NotMapped]
        public int contacts {get; set;}

        [NotMapped]
        public Property Button{
            get{
                if(!string.IsNullOrEmpty(this.color_button)){
                    var color = this.color_button.Replace("-","");
                    Property j = JsonConvert.DeserializeObject<Property>(color);
                    return j;
                }
                else return null;
            }   
        }
    }


    public partial class Survey
    {
        public string title { get; set; }
        public string description { get; set; }
        public string code { get; set; }
        public bool active { get; set; }
        public DateTime createdat { get; set; }
    }
} 
