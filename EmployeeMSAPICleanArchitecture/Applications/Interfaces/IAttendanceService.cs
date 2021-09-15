using Applications.Dtos;
using Domains.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Applications.Interfaces
{
    public interface IAttendanceService
    {
        public AttendanceItem AddAttendance(AttendanceItem attendance);
        public AttendanceViewModel GetAttendance();
        public AttendanceItem UpdateAttendance(Guid id, AttendanceItem attendance);
        public AttendanceItem GetOneAttendance(Guid id);
        public AttendanceViewModel GetAttendanceByEmployee(Guid id);
        public string DeleteAttendance(Guid id);

        //public AttendanceItem MapRepoModel(Attendance attendance);
        //public Attendance MapViewModel(Attendance attendance);
        //public AttendanceViewModel MapRepoTable(IEnumerable<Attendance> attendance);
    }
}
