using Infrastructures.Context;
using Microsoft.EntityFrameworkCore;
using Models.Entities;
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
            existEmployee.Name = employee.Name;
            existEmployee.Email = employee.Email;
            existEmployee.Phone = employee.Phone;
            _context.Entry(existEmployee).State = EntityState.Modified;
            _context.SaveChanges();
            return existEmployee;
        }
    }
}
