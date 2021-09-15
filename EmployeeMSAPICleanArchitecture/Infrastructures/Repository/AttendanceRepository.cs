﻿using Domains.Entities;
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
    public class AttendanceRepository: IAttendance
    {
        private readonly AppDbContext _context;
        public AttendanceRepository(AppDbContext context)
        {
            _context = context;
        }
        public Attendance AddAttendance(Attendance attendance)
        {
            _context.Attendances.Add(attendance);
            _context.SaveChanges();
            return attendance;
        }

        public string DeleteAttendance(Guid id)
        {
            var existAttendance = _context.Attendances.Find(id);
            _context.Attendances.Remove(existAttendance);
            _context.SaveChanges();
            return "Successfully Deleted.";

        }

        public IEnumerable<Attendance> GetAttendance()
        {
            return _context.Attendances;
        }

        public IEnumerable<Attendance> GetAttendanceByEmployee(Guid id)
        {
            return _context.Attendances;
        }

        public Attendance GetOneAttendance(Guid id)
        {
            return _context.Attendances.Find(id);

        }

        public Attendance UpdateAttendance(Guid id, Attendance attendance)
        {
            var existAttendance = _context.Attendances.Find(id);
            existAttendance.Employee = attendance.Employee;
            existAttendance.RegistryTime = attendance.RegistryTime;
            existAttendance.RegistryType = attendance.RegistryType;
            existAttendance.Remark = attendance.Remark;
            _context.Entry(existAttendance).State = EntityState.Modified;
            _context.SaveChanges();
            return existAttendance;
        }
    }
}
