using Applications.ViewModels;
using Models.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Applications.Mapping
{
    public static class EmployeeMapping
    {
        public static EmployeeItem ToDto(this  Employee entity)
        {
            return new EmployeeItem
            {
                Id = entity.Id,
                FName = entity.FName,
                LName = entity.LName,
                MName=entity.MName,
                Gender = entity.Gender,
                Phone = entity.Phone,
                Email=entity.Email,
                Address=entity.Address,
                BirtDate=entity.BirtDate,
                HiredAt=entity.HiredAt,
                Status=entity.Status
            };
        }

        public static Employee ToEmployee(this Employee employee)
        {
            return new Employee
            {
                 FName = employee.FName,
             LName = employee.LName,
             MName = employee.MName,
             Phone = employee.Phone,
             Email = employee.Email,
             BirtDate = employee.BirtDate,
             Address = employee.Address,
             HiredAt = employee.HiredAt,
             Status = employee.Status
        };
        }
    }
}
