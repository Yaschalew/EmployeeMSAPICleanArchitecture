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
        public ResponseDto<AttendanceItem> Add(AttendanceItem attendanceItem);
        public ResponseDto<AttendanceItem> Update(AttendanceItem attendanceItem);
        public ResponseDto<AttendanceItem> GetAll();
        public ResponseDto<AttendanceItem> GetByID(Guid id);
        public ResponseDto<AttendanceItem> GetByEmployee(Guid employeeID);
        public ResponseDto<AttendanceItem> Delete(Guid id);
    }
}
