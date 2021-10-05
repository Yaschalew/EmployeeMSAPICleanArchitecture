using Applications.Dtos;
using Domains.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Applications.Mappings
{
    public static class AttendancesMapper
    {
        public static AttendanceItem ToDto(this Attendance attendance)
        {
            return new AttendanceItem
            {
                ID = attendance.ID,
                EmployeeId = attendance.EmployeeId,
                LoginTime = attendance.LoginTime,
                LoginDescription = attendance.LoginDescription,
                LogoutTime = attendance.LogoutTime,
                LogoutDescription = attendance.LogoutDescription,
                Remark = attendance.Remark
            };
        }
        public static Attendance ToModel(this AttendanceItem attendance)
        {
            return new Attendance
            {
                ID = attendance.ID,
                EmployeeId = attendance.EmployeeId,
                LoginTime = attendance.LoginTime,
                LoginDescription = attendance.LoginDescription,
                LogoutTime = attendance.LogoutTime,
                LogoutDescription = attendance.LogoutDescription,
                Remark = attendance.Remark
            };
        }
        //public static EmployeeItem ToDto(this Employee employee)
        //{
        //    return new EmployeeItem
        //    {
        //        FName = employee.FName,
        //        MName = employee.MName,
        //        Gender = employee.Gender,
        //        Phone = employee.Phone,
        //        Email = employee.Email,
        //        BirtDate = employee.BirtDate,
        //        Address = employee.Address,
        //        HiredAt = employee.HiredAt,
        //        Status = employee.Status
        //    };
        //}
        //public static Employee ToModel(this EmployeeItem employee)
        //{
        //    return new Employee
        //    {
        //        FName = employee.FName,
        //        MName = employee.MName,
        //        Gender = employee.Gender,
        //        Phone = employee.Phone,
        //        Email = employee.Email,
        //        BirtDate = employee.BirtDate,
        //        Address = employee.Address,
        //        HiredAt = employee.HiredAt,
        //        Status = employee.Status
        //    };
        //}
    }
}
