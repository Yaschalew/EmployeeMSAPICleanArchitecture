using Applications.Dtos;
using IdentityAuth.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Applications.Interfaces
{
    public interface IAuthService
    {
        public Task<string> login(LoginItem loginItem);

        Task<Boolean> RegisterUser(Guid Id,string email, string password);
    }
}
