

using System;
using System.Threading.Tasks;
using CSX_Server.Context;
using CSX_Server.Models;
using PliQ.Models;

namespace PliQ.Business{

    public class TokenLogBusiness{

        private readonly CsxContext _csxContext;

        public TokenLogBusiness(CsxContext csxContext){
            _csxContext = csxContext;
        }

        public async Task<TokenLogs> Save(Tokens token, TokenLogs log){
            try
            {
                log.createdat = DateTime.Now;
                _csxContext.TokenLogs.Add(log);
                //Update hits
                token.hits++;
                _csxContext.Tokens.Update(token);
                await _csxContext.SaveChangesAsync();
                return log;
            }
            catch (System.Exception ex)
            {
                throw ex;
            }
        }
    }

}