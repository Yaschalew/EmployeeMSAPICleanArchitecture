using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Applications.Dtos
{
    public class AttendanceItem
    {
        public Guid Id { get; set; }
        public Guid EmployeeId { get; set; }
        public DateTime AttendanceDate { get; set; }
        public string Remark { get; set; }
    }
}
