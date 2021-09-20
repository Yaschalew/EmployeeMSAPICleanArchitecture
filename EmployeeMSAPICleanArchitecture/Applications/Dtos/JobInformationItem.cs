using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Applications.Dtos
{
   public class JobInformationItem
    {
        public Guid Id { get; set; }
        public Guid EmployeeId { get; set; }
        public Guid PositinId { get; set; }
        public string Role { get; set; }
        public DateTime HiredDate { get; set; }
        public Boolean status { get; set; }
        public string Remark { get; set; }
    }
}