using Applications.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Applications.Interfaces
{
    public interface IAttendanceService
    {
        AttendanceItem AddAttendance(AttendanceItem attendanceItem);
        string DeleteAttendance(Guid id);
        AttendanceViewModel GetAttendance();
        AttendanceItem GetOneAttendance(Guid id);
        AttendanceItem UpdateAttendance(Guid id, AttendanceItem attendanceItem);
    }
}
