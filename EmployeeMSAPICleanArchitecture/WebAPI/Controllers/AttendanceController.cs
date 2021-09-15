using Applications.Dtos;
using Applications.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;

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
        public AttendanceItem AddAttendance(AttendanceItem attendanceItem)
        {
            return _iAttendanceService.AddAttendance(attendanceItem);
        }
        [HttpGet]
        public AttendanceViewModel GetAttendance()
        {
            return _iAttendanceService.GetAttendance();
        }
        [HttpPatch]
        public AttendanceItem UpdateAttendance(Guid id, AttendanceItem attendanceItem)
        {
            return _iAttendanceService.UpdateAttendance(id, attendanceItem);
        }
        [HttpDelete("{id}")]
        public string DeleteAttendance(Guid id)
        {
            return _iAttendanceService.DeleteAttendance(id);
        }
        [HttpGet("{id}")]
        public AttendanceItem GetOneAttendance(Guid id)
        {
            return _iAttendanceService.GetOneAttendance(id);
        }
    }
}
