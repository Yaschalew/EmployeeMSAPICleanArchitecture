using Domains.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domains.Interface
{
    public interface IAttendanceRepo
    {
        public Attendance Add(Attendance attendance);
        public bool Update(Guid id, Attendance attendance);
        public IEnumerable<Attendance> GetAll();
        public Attendance GetByID(Guid id);
        public IEnumerable<Attendance> GetByEmployee(Guid employeeID);
        public bool Delete(Guid id);
    }
}
