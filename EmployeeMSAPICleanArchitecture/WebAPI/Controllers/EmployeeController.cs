using Applications.Dtos.Response;
using Applications.Interfaces;
using Applications.ViewModels;
using IdentityAuth.Dtos;
using IdentityAuth.Services;
using Microsoft.AspNetCore.Authorization;
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
    [Authorize]
    public class EmployeeController : ControllerBase
    {

        private readonly IemployeeService _iemployeeService;
        private readonly IAuthService _iAuthService;
        public EmployeeController(IemployeeService iemployeeService, IAuthService iAuthService)
        {
            _iemployeeService = iemployeeService;
            _iAuthService = iAuthService;
        }
        [HttpPost]
        public Task<Boolean> AddEmployee(EmployeeItem employeeItem)
        {
           var Id=  _iemployeeService.AddEmployee(employeeItem);
            return _iAuthService.RegisterUser(Id,employeeItem.Email, employeeItem.Email);


        }
        [HttpGet]
        [Route("employee")]
        public EmployeeViewModel GetEmployee()
        {
            return _iemployeeService.GetEmployee();
        }


        [HttpGet]
        public async Task<ResponseDto<EmployeeItem>> Get(Guid? id, string searchKey, int? pageindex, int? pageSize)
        {
            return await _iemployeeService.GetWithPredicate(id, searchKey, pageindex, pageSize);

        }


        [HttpPatch("{id}")]
        public EmployeeItem UpdateEmployee(Guid id, EmployeeItem employeeItem)
        {
            return _iemployeeService.UpdateEmployee(id, employeeItem);
        }
        [HttpDelete("{id}")]
        public string DeleteEmployee(Guid id)
        {
            return _iemployeeService.DeleteEmployee(id);
        }
        [HttpGet("{id}")]
        public EmployeeItem GetOneEmployee(Guid id)
        {
            return _iemployeeService.GetOneEmployee(id);
        }
    }
}
