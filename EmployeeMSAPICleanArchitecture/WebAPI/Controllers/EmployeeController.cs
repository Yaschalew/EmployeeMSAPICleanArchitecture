using Applications.Interfaces;
using Applications.ViewModels;
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
    public class EmployeeController : ControllerBase
    {
        private readonly IemployeeService _iemployeeService;
        public EmployeeController(IemployeeService iemployeeService)
        {
            _iemployeeService = iemployeeService;
        }
        [HttpPost]
        public EmployeeItem AddEmployee(EmployeeItem employeeItem)
        {
            return _iemployeeService.AddEmployee(employeeItem);
        }
        [HttpGet]
        public EmployeeViewModel GetEmployee()
        {
            return _iemployeeService.GetEmployee();
        }
    }
}
