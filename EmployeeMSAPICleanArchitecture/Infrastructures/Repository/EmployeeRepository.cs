using Infrastructures.Context;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Models.Entities;
using Models.Interface;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Infrastructures.Repository
{
    public class EmployeeRepository : IEmployee
    {
        private readonly AppDbContext _context;
        private UserManager<IdentityUser> _userManager;
        public EmployeeRepository(AppDbContext context, UserManager<IdentityUser> userManager)
        {
            _context = context;
            _userManager = userManager;
        }
        public Guid AddEmployee(Employee employee)
        {
            employee.CreatedAt = DateTime.Now;
            _context.Employees.Add(employee);
            _context.SaveChanges();

            return employee.Id;
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
