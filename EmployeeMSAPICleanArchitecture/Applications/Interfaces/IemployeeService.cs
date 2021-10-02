using Applications.Dtos;
using System;

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
