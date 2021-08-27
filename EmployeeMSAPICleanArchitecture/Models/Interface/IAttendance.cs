using Domains.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domains.Interface
{
    public interface IAttendance
    {
        public Attendance AddAttendance(Attendance attendance);
        public IEnumerable<Attendance> GetAttendance();
        public Attendance UpdateAttendance(Guid id, Attendance attendance);
        public Attendance GetOneAttendance(Guid id);
        public string DeleteAttendance(Guid id);
    }
}
