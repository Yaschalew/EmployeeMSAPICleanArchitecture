using Applications.Dtos.Response;
using Applications.Interfaces;
using Applications.Mapping;
using Applications.ViewModels;
using LinqKit;
using Models.Entities;
using Models.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Applications.Services
{
    public class EmployeeService : IemployeeService
    {
        private  IEmployee<Employee> _iEmployee;
        public EmployeeService(IEmployee<Employee> iEmployee)
        {
            _iEmployee = iEmployee;
        }
        public Guid AddEmployee(EmployeeItem employeeItem)
        {
            Employee employee = new Employee();

            employee.FName = employeeItem.FName;
            employee.LName = employeeItem.LName;
            employee.MName = employeeItem.MName;
            employee.Gender = employeeItem.Gender;
            employee.Phone = employeeItem.Phone;
            employee.Email = employeeItem.Email;
            employee.BirtDate = employeeItem.BirtDate;
            employee.Address = employeeItem.Address;
            employee.HiredAt = employeeItem.HiredAt;
            employee.Status = employeeItem.Status;
           return _iEmployee.AddEmployee(employee);
           
        }

        public string DeleteEmployee(Guid id)
        {
            return _iEmployee.DeleteEmployee(id);
        }

        public EmployeeViewModel GetEmployee()
        {

            return new EmployeeViewModel()
            {
                employees = _iEmployee.GetEmployee()
            };
        }

        public EmployeeItem GetOneEmployee(Guid id)
        {
            EmployeeItem employeeItem = new EmployeeItem();
            Employee employee = new Employee();
            employee = _iEmployee.GetOneEmployee(id);
            employeeItem.FName =employee.FName;
            employeeItem.LName =employee.LName;
            employeeItem.MName =employee.MName;
            employeeItem.Gender = employee.Gender;
            employeeItem.Phone =employee.Phone;
            employeeItem.Email =employee.Email;
            employeeItem.BirtDate =employee.BirtDate;
            employeeItem.Address =employee.Address;
            employeeItem.HiredAt = employee.HiredAt;
            employeeItem.Status = employee.Status;
            return employeeItem;
        }

        public async Task<ResponseDto<EmployeeItem>> GetWithPredicate(Guid? id, string searchKey, int? pageIndex, int? pageSize)
        {
            int itemPerPage = pageSize ?? 2;
            int PageIndex = pageIndex ?? 0;
            var predicate = PredicateBuilder.True<Employee>();
            var pr = PredicateBuilder.New<Employee>();
            pr = string.IsNullOrEmpty(searchKey) ? null : pr.And(
                x=>x.FName.Contains(searchKey)||
                x.Email.Contains(searchKey)||
                x.MName.Contains(searchKey)
                );
            if (id != null)
                predicate = predicate.And(p => p.Id == id);
            else
                predicate = string.IsNullOrEmpty(searchKey) ? null
                           : predicate.And
                            (
                                p => p.FName.Contains(searchKey) ||
                                p.LName.Contains(searchKey) ||
                                p.MName.Contains(searchKey)||
                                p.Phone.Contains(searchKey) ||
                                p.Email.Contains(searchKey)||
                                p.Address.Contains(searchKey) ||
                                p.Status.Contains(searchKey)
                               
                            );
            int TotalRowCount= _iEmployee.GetEmployee().Count();
            return new ResponseDto<EmployeeItem>
                (
                
                    (await _iEmployee.GetWithPredicateAsync(predicate, pageIndex ?? 0, pageSize ?? 2))
                    .Select(x => x.ToDto()
                    ).ToList(),
                   TotalRowCount,   //total row count
                    itemPerPage,  // itemPerPage,
                    PageIndex, // currentPage,
                    PageIndex ==0? false: true,  // hasPrev,
                     PageIndex * itemPerPage + itemPerPage<TotalRowCount? true : false,   // hasNext
                    TotalRowCount % itemPerPage ==0? TotalRowCount / itemPerPage: TotalRowCount / itemPerPage +1
                ) ; ; ;
        }

        public EmployeeItem UpdateEmployee(Guid id, EmployeeItem employeeItem)
        {
            Employee employee = new Employee();

            employee.FName = employeeItem.FName;
            employee.LName = employeeItem.LName;
            employee.MName = employeeItem.MName;
            employee.Gender = employeeItem.Gender;
            employee.Phone = employeeItem.Phone;
            employee.Email = employeeItem.Email;
            employee.BirtDate = employeeItem.BirtDate;
            employee.Address = employeeItem.Address;
            employee.HiredAt = employeeItem.HiredAt;
            employee.Status = employeeItem.Status;
            _iEmployee.UpdateEmployee(id, employee);
            return employeeItem;
        }
    }
}
