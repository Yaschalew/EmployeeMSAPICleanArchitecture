using Applications.Mapping;
using Infrastructures.Context;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Models.Entities;
using Models.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Infrastructures.Repository
{
    public class EmployeeRepository : IEmployee<Employee>
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

        public async Task<IEnumerable<Employee>> GetWithPredicateAsync(Expression<Func<Employee, bool>> predicate, int pageIndex, int pageSize)
        {
            return predicate == null ? (await _context.Employees.Skip(pageIndex * pageSize).Take(pageSize).ToListAsync())
              : (await _context.Employees.Where(predicate).Skip(pageIndex * pageSize).Take(pageSize).ToListAsync());
        }

        public Employee UpdateEmployee(Guid id, Employee employee)
        {
            var existEmployee = _context.Employees.Find(id);

            existEmployee = existEmployee.ToEmployee();
            existEmployee.UpdatedAt = DateTime.Now;
            _context.Employees.Update(existEmployee);
            _context.SaveChanges();
            return existEmployee;
        }
    }
}
