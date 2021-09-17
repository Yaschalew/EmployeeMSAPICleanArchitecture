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
                Employee = attendance.Employee,
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
                Employee = attendance.Employee,
                LoginTime = attendance.LoginTime,
                LoginDescription = attendance.LoginDescription,
                LogoutTime = attendance.LogoutTime,
                LogoutDescription = attendance.LogoutDescription,
                Remark = attendance.Remark
            };
        }
    }
}
