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

        public static AttendanceItem MapperSingle(Attendance attendance)
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
        public static Attendance MapperSingle(AttendanceItem attendance)
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

        public static IEnumerable<Attendance> MapperCollection(IEnumerable<AttendanceItem> attendanceItems)
        {
            List<AttendanceItem> attendanceItemsList = new List<AttendanceItem>(attendanceItems);
            List<Attendance> attendanceModelsList = new List<Attendance>();
            for (int i = 0; i < attendanceItemsList.Count; i++)
            {
                attendanceModelsList.Add(attendanceItemsList[i].ToModel());
            }
            return attendanceModelsList;
        }
        public static IEnumerable<AttendanceItem> MapperCollection(IEnumerable<Attendance> attendanceModels)
        {
            List<AttendanceItem> attendanceItemsList = new List<AttendanceItem>();
            List<Attendance> attendanceModelsList = new List<Attendance>(attendanceModels);
            for (int i = 0; i < attendanceModelsList.Count; i++)
            {
                attendanceItemsList.Add(attendanceModelsList[i].ToDto());
            }
            return attendanceItemsList;
        }
    }
}
