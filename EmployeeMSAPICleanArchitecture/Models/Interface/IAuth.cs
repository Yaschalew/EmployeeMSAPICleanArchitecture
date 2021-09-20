using Domains.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domains.Interface
{
   public interface IAuth
    {
        public Task<string> login(Login login);
        public Task<Boolean> registerUser(Guid Id,string email, string password);
    }
}
