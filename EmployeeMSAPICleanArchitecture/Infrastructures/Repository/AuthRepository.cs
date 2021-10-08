using Applications.Dtos;
using Domains.Entities;
using Domains.Interface;
using IdentityAuth.Dtos;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructures.Repository
{
    public class AuthRepository : IAuth
    {
        private UserManager<IdentityUser> _userManager;
        private readonly IConfiguration _iConfiguration;

        public AuthRepository(UserManager<IdentityUser> userManager, IConfiguration iconfiguration)
        {
            _userManager = userManager;
            _iConfiguration = iconfiguration;
        }
        public async Task<string> login(Login login)
        {
            var user = await _userManager.FindByEmailAsync(login.Email);
            if (user == null)
            {
                return  "No user by this email.";
                
            }
            var result = await _userManager.CheckPasswordAsync(user, login.Password);
            if (!result)
            {
                return "Incorrect email or password.";
            }
            var claimsParam = new[]
         {
                new Claim("Email",login.Email),
                new Claim(ClaimTypes.NameIdentifier,user.Id),
            };
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_iConfiguration["AuthSettings:Key"]));
            var token = new JwtSecurityToken(
                issuer: _iConfiguration["AuthSettings:Audience"],
                audience: _iConfiguration["AuthSettings:Audience"],
                claims: claimsParam,
                expires: DateTime.Now.AddDays(1),
                signingCredentials: new SigningCredentials(key, SecurityAlgorithms.HmacSha256)
                );
            var tokenAsString = new JwtSecurityTokenHandler().WriteToken(token);

            return  tokenAsString;
        }

        public async Task<Boolean> registerUser(Guid Id,string email, string password)
        {
            var identityUser = new IdentityUser
            {
                Email = email,
                UserName = email,
                Id = Id.ToString()
            };

            var result = await _userManager.CreateAsync(identityUser, password);
            if (result.Succeeded)
            {
                return true;

            }
            else
            {
                return false;
            }
        }
            
    
    }
    
}
