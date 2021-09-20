using Applications.Dtos;
using Applications.Interfaces;
using Domains.Entities;
using Domains.Interface;
using IdentityAuth.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Applications.Services
{
    public class AuthService : IAuthService
    {

        private readonly IAuth _auth;
        public AuthService(IAuth auth)
        {
            _auth = auth;       
        }
        public Task<string> login(LoginItem loginItem)
        {
            Login login = new Login();
            login.Email = loginItem.Email;
            login.Password = loginItem.Password;
          return _auth.login(login); 
         
        }

        public Task<Boolean> RegisterUser(Guid Id,string email, string password)
        {
            return _auth.registerUser(Id,email, password);
        }
    }
}
