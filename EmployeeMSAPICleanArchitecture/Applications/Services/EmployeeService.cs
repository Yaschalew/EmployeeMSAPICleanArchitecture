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

            employee.FName = employeeItem.FName;
            employee.LName = employeeItem.LName;
            employee.MName = employeeItem.MName;
            employee.Gender = employeeItem.Gender;
            employee.Phone = employeeItem.Phone;
            employee.Email = employeeItem.Email;
            employee.BirtDate = employeeItem.BirtDate;
            employee.Address = employeeItem.Address;
            employee.HiredAt = employeeItem.HiredAt;
            employee.Status = employeeItem.Status;
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
            employeeItem.FName =employee.FName;
            employeeItem.LName =employee.LName;
            employeeItem.MName =employee.MName;
            employeeItem.Gender = employee.Gender;
            employeeItem.Phone =employee.Phone;
            employeeItem.Email =employee.Email;
            employeeItem.BirtDate =employee.BirtDate;
            employeeItem.Address =employee.Address;
            employeeItem.HiredAt = employee.HiredAt;
            employeeItem.Status = employee.Status;
            return employeeItem;
        }

        public EmployeeItem UpdateEmployee(Guid id, EmployeeItem employeeItem)
        {
            Employee employee = new Employee();

            employee.FName = employeeItem.FName;
            employee.LName = employeeItem.LName;
            employee.MName = employeeItem.MName;
            employee.Gender = employeeItem.Gender;
            employee.Phone = employeeItem.Phone;
            employee.Email = employeeItem.Email;
            employee.BirtDate = employeeItem.BirtDate;
            employee.Address = employeeItem.Address;
            employee.HiredAt = employeeItem.HiredAt;
            employee.Status = employeeItem.Status;
            _iEmployee.UpdateEmployee(id, employee);
            return employeeItem;
        }
    }
}
