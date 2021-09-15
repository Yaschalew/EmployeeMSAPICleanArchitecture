using Models.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domains.Entities
{
    public class Attendance
    {
        public Guid Id { get; set; }
        public Guid EmployeeId { get; set; }
        public DateTime RegistryTime { get; set; }
        public string RegistryType { get; set; }
        public string Remark { get; set; }
    }
}
