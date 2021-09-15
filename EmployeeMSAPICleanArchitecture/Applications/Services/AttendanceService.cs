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
            attendance.Employee = attendanceItem.Employee;
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
            attendanceItem.Employee = attendance.Employee;
            attendanceItem.RegistryTime = attendance.RegistryTime;
            attendanceItem.RegistryType = attendance.RegistryType;
            attendanceItem.Remark = attendance.Remark;

            return attendanceItem;
        }

        public AttendanceItem MapRepoModel(Attendance attendance)
        {
            AttendanceItem attendance_item = new();
            attendance_item.Id = attendance.Id;
            attendance_item.Employee = attendance.Employee;
            attendance_item.RegistryTime = attendance.RegistryTime;
            attendance_item.RegistryType = attendance.RegistryType;
            attendance_item.Remark = attendance.Remark;
            return attendance_item;
        }

        public AttendanceItem UpdateAttendance(Guid id, AttendanceItem attendance)
        {
            throw new NotImplementedException();
        }

        //public AttendanceViewModel MapRepoTable(IEnumerable<Attendance> attendances)
        //{
        //    AttendanceViewModel attendanceViewModel = new();
        //    List<IAttendance> attendanceList = new();
        //    foreach(Attendance attendance in attendances)
        //    {
        //        attendanceList.Concat(this.MapRepoTable(attendance));
        //    }

        //    IEnumerable<IAttendance> attendanceIE = attendanceList;
        //    attendanceViewModel.Attendances = attendanceIE;
        //}

        //public Attendance MapViewModel(Attendance attendance)
        //{
        //    throw new NotImplementedException();
        //}

        //public AttendanceItem UpdateAttendance(Guid id, AttendanceItem attendanceItem)
        //{
        //    Attendance attendance = new Attendance();
        //    attendance.EmployeeId = attendanceItem.EmployeeId;
        //    attendance.AttendanceDate = attendanceItem.AttendanceDate;
        //    attendance.Remark = attendanceItem.Remark;

        //    _iAttendance.UpdateAttendance(id, attendance);
        //    return attendanceItem;
        //}
    }
}
