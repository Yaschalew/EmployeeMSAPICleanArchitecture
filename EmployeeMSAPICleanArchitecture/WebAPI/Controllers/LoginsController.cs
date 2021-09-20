using Applications.Dtos;
using Applications.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginsController : ControllerBase
    {
        private readonly IAuthService _iAuthService;
        public LoginsController(IAuthService iAuthService)
        {
            _iAuthService = iAuthService;
        }
        [HttpPost]
        public LoginRespons login(LoginItem loginItem)
        {

            var result = _iAuthService.login(loginItem).Result;
            if(result== "Incorrect email or password.")
            {
                return new LoginRespons
                {
                    Message = result,
                    IsSuccess = false
                };
            }
            if (result == "No user by this email.")
            {
                return new LoginRespons
                {
                    Message = result,
                    IsSuccess = false
                };
            }
            return new LoginRespons
            {
                Message = result,
                Email=loginItem.Email,
                IsSuccess = true
            };

        }
    }
}
