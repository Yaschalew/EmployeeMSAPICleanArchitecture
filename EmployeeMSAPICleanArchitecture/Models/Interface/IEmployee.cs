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
        public EmployeeId AddEmployee(EmployeeId EmployeeId);
        public IEnumerable<EmployeeId> GetEmployee();
        public EmployeeId UpdateEmployee(Guid id,EmployeeId EmployeeId);
        public EmployeeId GetOneEmployee(Guid id);
        public string DeleteEmployee(Guid id);
    }
}
