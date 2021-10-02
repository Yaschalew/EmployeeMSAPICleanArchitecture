using Domains.Entities;
using Infrastructures.Context;
using Microsoft.EntityFrameworkCore;
using Models.Interface;
using System;
using System.Collections.Generic;

namespace Infrastructures.Repository
{
    public class EmployeeRepository : IEmployee
    {
        private readonly AppDbContext _context;
        public EmployeeRepository(AppDbContext context)
        {
            _context = context;
        }
        public Employee AddEmployee(Employee employee)
        {
            employee.CreatedAt = DateTime.Now;
            _context.Employees.Add(employee);
            _context.SaveChanges();
            return employee;
        }

        public string DeleteEmployee(Guid id)
        {
            var existEmployee = _context.Employees.Find(id);
            _context.Employees.Remove(existEmployee);
            _context.SaveChanges();
            return "Successfully Deleted.";

        }

        public IEnumerable<Employee> GetEmployee()
        {
            return _context.Employees;
        }

        public Employee GetOneEmployee(Guid id)
        {
            return _context.Employees.Find(id);
            
        }

        public Employee UpdateEmployee(Guid id, Employee employee)
        {
            var existEmployee = _context.Employees.Find(id);

           existEmployee.FName = employee.FName;
           existEmployee.LName = employee.LName;
           existEmployee.MName = employee.MName;
           existEmployee.Phone = employee.Phone;
           existEmployee.Email = employee.Email;
           existEmployee.BirtDate = employee.BirtDate;
           existEmployee.Address = employee.Address;
           existEmployee.HiredAt = employee.HiredAt;
            existEmployee.Status = employee.Status;
            existEmployee.UpdatedAt = DateTime.Now;
            _context.Entry(existEmployee).State = EntityState.Modified;
            _context.SaveChanges();
            return existEmployee;
        }
    }
}
