using Applications.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Applications.Interfaces
{
   public interface IemployeeService
    {

        public EmployeeItem AddEmployee(EmployeeItem employee);
        public EmployeeViewModel GetEmployee();
        public EmployeeItem UpdateEmployee(Guid id, EmployeeItem employee);
        public EmployeeItem GetOneEmployee(Guid id);
        public string DeleteEmployee(Guid id);
    }
}
