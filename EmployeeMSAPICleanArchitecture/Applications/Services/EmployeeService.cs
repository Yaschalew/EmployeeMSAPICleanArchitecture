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
            Employee employee = new Employee();
            employee.Name = employeeItem.Name;
            employee.Phone = employeeItem.Phone;
            employee.Email = employeeItem.Email;

            _iEmployee.AddEmployee(employee);
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
            Employee employee = new Employee();
            employee = _iEmployee.GetOneEmployee(id);
            employeeItem.Name = employee.Name;
            employeeItem.Email = employee.Email;
            employeeItem.Phone = employee.Phone;
            return employeeItem;
        }

        public EmployeeItem UpdateEmployee(Guid id, EmployeeItem employeeItem)
        {
            Employee employee = new Employee();
            employee.Name = employeeItem.Name;
            employee.Phone = employeeItem.Phone;
            employee.Email = employeeItem.Email;

            _iEmployee.UpdateEmployee(id, employee);
            return employeeItem;
        }
    }
}
