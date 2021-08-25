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
        [HttpPatch]
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
