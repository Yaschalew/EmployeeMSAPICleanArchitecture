using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Applications.Dtos
{
    public class ExperienceItem
    {
        public Guid Id { get; set; }
        public Guid EmployeId { get; set; }
        public string Salary { get; set; }
        public string Position { get; set; }
        public string Company { get; set; }
        public string Year { get; set; }
        public string ResignReason { get; set; }
        public string Remark { get; set; }
    }
}
