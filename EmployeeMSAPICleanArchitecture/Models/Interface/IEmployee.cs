using Models.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
