using Applications.Dtos;
using Domains.Entities;

namespace Applications.Mappings
{
    public static class EmployeeMapper
    {
        public static EmployeeItem ToDto(this Employee employee)
        {
            return new EmployeeItem
            {
                FName = employee.FName,
                MName = employee.MName,
                Gender = employee.Gender,
                Phone = employee.Phone,
                Email = employee.Email,
                BirtDate = employee.BirtDate,
                Address = employee.Address,
                HiredAt = employee.HiredAt,
                Status = employee.Status
            };
        }
        public static Employee ToModel(this EmployeeItem employee)
        {
            return new Employee
            {
                FName = employee.FName,
                MName = employee.MName,
                Gender = employee.Gender,
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
