using Applications.Dtos;
using Applications.Interfaces;
using Applications.Mappings;
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
        private readonly IAttendanceRepo _iAttendance;

        public AttendanceService(IAttendanceRepo iAttendance)
        {
            _iAttendance = iAttendance;
        }

        public ResponseDto<AttendanceItem> Add(AttendanceItem attendanceItem)
        {
            return new ResponseDto<AttendanceItem>(_iAttendance.Add(attendanceItem.ToModel()).ToDto(), true, "Member Created Successfully");
        }

        public ResponseDto<AttendanceItem> Delete(Guid id)
        {
            return new ResponseDto<AttendanceItem>(_iAttendance.Delete(id), "Member Deleted Successfully");
        }

        public ResponseDto<AttendanceItem> GetAll()
        {
            return new ResponseDto<AttendanceItem>(_iAttendance.GetAll().Select(x => x.ToDto()).ToList());
        }

        public ResponseDto<AttendanceItem> GetByEmployee(Guid employeeID)
        {
            return new ResponseDto<AttendanceItem>(_iAttendance.GetByEmployee(employeeID).Select(x => x.ToDto()).ToList());
        }

        public ResponseDto<AttendanceItem> GetByID(Guid id)
        {
            return new ResponseDto<AttendanceItem>(_iAttendance.GetByID(id).ToDto());
        }

        public ResponseDto<AttendanceItem> Update(AttendanceItem attendanceItem)
        {
            return new ResponseDto<AttendanceItem>(attendanceItem, _iAttendance.Update(attendanceItem.ID, attendanceItem.ToModel()), "Member Updated Successfully");
        }
    }
}
