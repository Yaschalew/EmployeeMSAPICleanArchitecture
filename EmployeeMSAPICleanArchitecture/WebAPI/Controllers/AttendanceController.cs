using Applications.Dtos;
using Applications.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AttendanceController : ControllerBase
    {
        private readonly IAttendanceService _iAttendanceService;
        public AttendanceController(IAttendanceService iAttendanceService)
        {
            _iAttendanceService = iAttendanceService;
        }

        [HttpPost]
        public ResponseDto<AttendanceItem> Create(AttendanceItem educationitem)
        {
            return _iAttendanceService.Add(educationitem);
        }
        [HttpGet]
        public ResponseDto<AttendanceItem> GetAll()
        {
            return _iAttendanceService.GetAll();
        }
        [HttpPatch]
        public ResponseDto<AttendanceItem> Edit(Guid id, AttendanceItem attendanceItem)
        {
            attendanceItem.ID = id;
            return _iAttendanceService.Update(attendanceItem);
        }
        [HttpDelete("{id}")]
        public ResponseDto<AttendanceItem> Erase(Guid id)
        {
            return _iAttendanceService.Delete(id);
        }

        [HttpGet("{id}")]
        public ResponseDto<AttendanceItem> GetByID(Guid id)
        {
            return _iAttendanceService.GetByID(id);
        }
    }
}
