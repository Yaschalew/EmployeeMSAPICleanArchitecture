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
        public Guid Employee { get; set; }
        public DateTime RegistryTime { get; set; }
        public string RegistryType { get; set; }
        public string Remark { get; set; }
    }
}
