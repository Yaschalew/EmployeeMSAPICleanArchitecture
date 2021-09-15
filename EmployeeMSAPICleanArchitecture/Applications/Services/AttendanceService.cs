using Applications.Dtos;
using Applications.Interfaces;
using Domains.Entities;
using Domains.Interface;
using System;

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
            attendance.RegistryTime = attendanceItem.RegistryTime;
            attendance.RegistryType = attendanceItem.RegistryType;
            attendance.Remark = attendanceItem.Remark;

            _iAttendance.AddAttendance(attendance);
            attendanceItem.Id = attendance.Id;
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

        public AttendanceViewModel GetAttendanceByEmployee(Guid id)
        {
            throw new NotImplementedException();
        }

        public AttendanceItem GetOneAttendance(Guid id)
        {
            AttendanceItem attendanceItem = new AttendanceItem();
            Attendance attendance = new Attendance();
            attendance = _iAttendance.GetOneAttendance(id);
            attendanceItem.Id = attendance.Id;
            attendanceItem.EmployeeId = attendance.EmployeeId;
            attendanceItem.RegistryTime = attendance.RegistryTime;
            attendanceItem.RegistryType = attendance.RegistryType;
            attendanceItem.Remark = attendance.Remark;

            return attendanceItem;
        }

        public AttendanceItem UpdateAttendance(Guid id, AttendanceItem attendanceItem)
        {
            Attendance attendance = new Attendance();
            attendance.EmployeeId = attendanceItem.EmployeeId;
            attendance.RegistryTime = attendanceItem.RegistryTime;
            attendance.RegistryType = attendanceItem.RegistryType;
            attendance.Remark = attendanceItem.Remark;

            attendance = _iAttendance.UpdateAttendance(id, attendance);
            return attendanceItem;
        }
    }
}
