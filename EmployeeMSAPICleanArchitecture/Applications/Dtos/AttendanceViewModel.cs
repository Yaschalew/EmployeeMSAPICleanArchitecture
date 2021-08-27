using Domains.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Applications.Dtos
{
    public class AttendanceViewModel
    {
        public IEnumerable<Attendance> Attendances { get; set; }
    }
}
