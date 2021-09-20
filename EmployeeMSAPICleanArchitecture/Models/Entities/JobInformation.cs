using Models.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domains.Entities
{
   public class JobInformation
    {
        public Guid Id { get; set; }
        [ForeignKey("Position")]
        public Guid PositinId { get; set; }
        public Position Position { get; set; }
        public Guid EmployeeId { get; set; }
        public Employee Employee { get; set; }
       
        public string Role { get; set; }
        public DateTime HiredDate { get; set; }
        public Boolean status { get; set; }
        public string Remark { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

    }
}
