using Applications.ViewModels;
using System;

namespace Applications.Interfaces
{
    public interface IemployeeService
    {

        public EmployeeItem AddEmployee(EmployeeItem EmployeeId);
        public EmployeeViewModel GetEmployee();
        public EmployeeItem UpdateEmployee(Guid id, EmployeeItem EmployeeId);
        public EmployeeItem GetOneEmployee(Guid id);
        public string DeleteEmployee(Guid id);

    }
}
