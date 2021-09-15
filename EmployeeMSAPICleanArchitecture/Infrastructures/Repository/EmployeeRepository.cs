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
        public EmployeeId AddEmployee(EmployeeId EmployeeId)
        {
            _context.Employees.Add(EmployeeId);
            _context.SaveChanges();
            return EmployeeId;
        }

        public string DeleteEmployee(Guid id)
        {
            var existEmployee = _context.Employees.Find(id);
            _context.Employees.Remove(existEmployee);
            _context.SaveChanges();
            return "Successfully Deleted.";

        }

        public IEnumerable<EmployeeId> GetEmployee()
        {
            return _context.Employees;
        }

        public EmployeeId GetOneEmployee(Guid id)
        {
            return _context.Employees.Find(id);
            
        }

        public EmployeeId UpdateEmployee(Guid id, EmployeeId EmployeeId)
        {
            var existEmployee = _context.Employees.Find(id);
            existEmployee.Name = EmployeeId.Name;
            existEmployee.Email = EmployeeId.Email;
            existEmployee.Phone = EmployeeId.Phone;
            _context.Entry(existEmployee).State = EntityState.Modified;
            _context.SaveChanges();
            return existEmployee;
        }
    }
}
