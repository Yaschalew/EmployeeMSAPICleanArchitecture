using Applications.Dtos;
using Applications.Interfaces;
using Domains.Entities;
using Domains.Interface;
using Infrastructures.Context;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructures.Repository
{
    public class AttendanceRepo : IAttendanceRepo
    {
        private readonly AppDbContext _context;

        public AttendanceRepo(AppDbContext context)
        {
            _context = context;
        }

        public Attendance Add(Attendance attendance)
        {
            _context.Attendances.Add(attendance);
            _context.SaveChanges();

            return attendance;
        }

        public bool Delete(Guid id)
        {
            var stored_data = _context.Attendances.Find(id);
            _context.Attendances.Remove(stored_data);

            _context.SaveChanges();
            return true;
        }

        public IEnumerable<Attendance> GetAll()
        {
            return _context.Attendances;
        }

        public IEnumerable<Attendance> GetByEmployee(Guid employeeID)
        {
            throw new NotImplementedException();
        }

        public Attendance GetByID(Guid id)
        {
            return _context.Attendances.Find(id);
        }

        public bool Update(Guid id, Attendance attendance)
        {
            var stored_record = _context.Attendances.Find(id);
            stored_record.Employee = attendance.Employee;
            stored_record.LoginTime = attendance.LoginTime;
            stored_record.LoginDescription = attendance.LoginDescription;
            stored_record.LogoutTime = attendance.LogoutTime;
            stored_record.LogoutDescription = attendance.LogoutDescription;
            stored_record.Remark = attendance.Remark;
            _context.Entry(stored_record).State = EntityState.Modified;
            _context.SaveChanges();
            return true;
        }
    }
}
