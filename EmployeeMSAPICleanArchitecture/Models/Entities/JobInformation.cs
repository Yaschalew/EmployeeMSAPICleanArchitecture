using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domains.Entities
{
   public class JobInformation
    {
        public Guid Id { get; set; }
        public Guid EmployeeId { get; set; }
        public Guid PositinId { get; set; }
        public string Remark { get; set; }
    }
}
