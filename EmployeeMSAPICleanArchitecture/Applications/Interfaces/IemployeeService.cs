using Applications.Dtos.Response;
using Applications.ViewModels;
using System;
using System.Threading.Tasks;

namespace Applications.Interfaces
{
    public interface IemployeeService
    {

        public Guid AddEmployee(EmployeeItem employee);
        public EmployeeViewModel GetEmployee();
        public EmployeeItem UpdateEmployee(Guid id, EmployeeItem employee);
        public EmployeeItem GetOneEmployee(Guid id);
        public string DeleteEmployee(Guid id);

        Task<ResponseDto<EmployeeItem>> GetWithPredicate(Guid? id, string searchKey, int? pageIndex, int? pageSize);

    }
}
