using Applications.Dtos;
using Applications.Interfaces;
using Domains.Entities;
using Domains.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Applications.Services
{
    public class AttendanceService : IAttendanceService
    {
        private readonly IAttendance _iAttendance;
        public AttendanceService(IAttendance iAttendance)
        {
            _iAttendance = iAttendance;
        }
        public AttendanceItem AddAttendance(AttendanceItem attendanceItem)
        {
            Attendance attendance = new Attendance();
            attendance.EmployeeId = attendanceItem.EmployeeId;
            attendance.AttendanceDate = attendanceItem.AttendanceDate;
            attendance.Remark = attendanceItem.Remark;

            _iAttendance.AddAttendance(attendance);
            return attendanceItem;
        }

        public string DeleteAttendance(Guid id)
        {
            return _iAttendance.DeleteAttendance(id);
        }

        public AttendanceViewModel GetAttendance()
        {

            return new AttendanceViewModel()
            {
                Attendances = _iAttendance.GetAttendance()
            };
        }

        public AttendanceItem GetOneAttendance(Guid id)
        {
            AttendanceItem attendanceItem = new AttendanceItem();
            Attendance attendance = new Attendance();
            attendance = _iAttendance.GetOneAttendance(id);
            attendanceItem.EmployeeId = attendance.EmployeeId;
            attendanceItem.AttendanceDate = attendance.AttendanceDate;
            attendanceItem.Remark = attendance.Remark;
            return attendanceItem;
        }

        public AttendanceItem UpdateAttendance(Guid id, AttendanceItem attendanceItem)
        {
            Attendance attendance = new Attendance();
            attendance.EmployeeId = attendanceItem.EmployeeId;
            attendance.AttendanceDate = attendanceItem.AttendanceDate;
            attendance.Remark = attendanceItem.Remark;

            _iAttendance.UpdateAttendance(id, attendance);
            return attendanceItem;
        }
    }
}
