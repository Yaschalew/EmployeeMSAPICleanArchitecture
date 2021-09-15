using Applications.Interfaces;
using Applications.ViewModels;
using Models.Entities;
using Models.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Applications.Services
{
    public class EmployeeService : IemployeeService
    {
        private readonly IEmployee _iEmployee;
        public EmployeeService(IEmployee iEmployee)
        {
            _iEmployee = iEmployee;
        }
        public EmployeeItem AddEmployee(EmployeeItem employeeItem)
        {
            EmployeeId EmployeeId = new EmployeeId();
            EmployeeId.Name = employeeItem.Name;
            EmployeeId.Phone = employeeItem.Phone;
            EmployeeId.Email = employeeItem.Email;

            _iEmployee.AddEmployee(EmployeeId);
            return employeeItem;
        }

        public string DeleteEmployee(Guid id)
        {
            return _iEmployee.DeleteEmployee(id);
        }

        public EmployeeViewModel GetEmployee()
        {

            return new EmployeeViewModel()
            {
                employees = _iEmployee.GetEmployee()
            };
        }

        public EmployeeItem GetOneEmployee(Guid id)
        {
            EmployeeItem employeeItem = new EmployeeItem();
            EmployeeId EmployeeId = new EmployeeId();
            EmployeeId = _iEmployee.GetOneEmployee(id);
            employeeItem.Name = EmployeeId.Name;
            employeeItem.Email = EmployeeId.Email;
            employeeItem.Phone = EmployeeId.Phone;
            return employeeItem;
        }

        public EmployeeItem UpdateEmployee(Guid id, EmployeeItem employeeItem)
        {
            EmployeeId EmployeeId = new EmployeeId();
            EmployeeId.Name = employeeItem.Name;
            EmployeeId.Phone = employeeItem.Phone;
            EmployeeId.Email = employeeItem.Email;

            _iEmployee.UpdateEmployee(id, EmployeeId);
            return employeeItem;
        }
    }
}
