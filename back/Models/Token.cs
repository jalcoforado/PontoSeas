using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using CSX_Server.Models;

namespace PliQ.Models
{
    [Table("tokens", Schema = "general")]
    public partial class Tokens
    {
        public decimal id_token { get; set; }
        public Guid code { get; set; }
        public int hits {get; set;}
        public bool active { get; set; }
        public DateTime createdat { get; set; }
        public DateTime? updatedat { get; set; }
        public decimal fk_user_create { get; set; }
        public decimal? fk_user_update { get; set; }
        public decimal fk_company { get; set; }
        public virtual Companies Companies { get; set; }
        public virtual Users Users { get; set; }
        public virtual ICollection<TokenLogs> TokenLogs { get; set; }
    }

    [Table("token_logs", Schema = "general")]
    public partial class TokenLogs
    {
        public decimal id_token_log { get; set; }
        public string ip { get; set; }
        public string http_method { get; set; }
        public string url_method { get; set; }
        public string status { get; set; }
        public string header { get; set; }
        public string body { get; set; }
        public string result { get; set; }
        public DateTime createdat { get; set; }
        public decimal fk_token { get; set; }
        public virtual Tokens Token { get; set; }
    }
}
