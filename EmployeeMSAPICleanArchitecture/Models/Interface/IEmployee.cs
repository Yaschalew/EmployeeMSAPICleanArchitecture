using Domains.Entities;
using System;
using System.Collections.Generic;

namespace Models.Interface
{
    public interface IEmployee
    {
        public Employee AddEmployee(Employee employee);
        public IEnumerable<Employee> GetEmployee();
        public Employee UpdateEmployee(Guid id,Employee employee);
        public Employee GetOneEmployee(Guid id);
        public string DeleteEmployee(Guid id);
    }
}
