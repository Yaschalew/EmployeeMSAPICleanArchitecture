using System;

namespace Domains.Entities
{
    public class Education
    {
        public Guid Id { get; set; }
        public int EmployeeId { get; set; }
        public string Level { get; set; }
        public DateTime GraduatedYear { get; set; }
        public string Institute { get; set; }
        public string GPA { get; set; }
        public string Address { get; set; }

    }
}
