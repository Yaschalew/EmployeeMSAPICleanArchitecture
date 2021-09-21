using IdentityAuth.Dtos;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System.Threading.Tasks;

namespace IdentityAuth.Services
{
    public interface IUserService
    {
        
    }
    public class UserService : IUserService
    {
        private UserManager<IdentityUser> _userManager;
        public UserService(UserManager<IdentityUser> userManager)
        {
            _userManager = userManager;
        }
        public async Task<UserManagerResponse> RegisterUser(string email, string password)
        {
           
            var identityUser = new IdentityUser
            {
                Email = email,
                UserName = password
            };
            var result = await _userManager.CreateAsync(identityUser,password);
            if (result.Succeeded)
            {
                return new UserManagerResponse
                {
                    Message = "User created successfully.",
                    IsSuccess = true
                };

            }

            return new UserManagerResponse
            {
                Message = "User didn't create",
                IsSuccess = false,
                Errors= result.Errors
            };
        }

    }
}
