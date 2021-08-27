using System;

namespace Domains.Entities
{
    public class Experience
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
