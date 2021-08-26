using System;

namespace Domains.Entities
{
    public class Education
    {
        public Guid Id { get; set; }
        public string EmployeeId { get; set; }
        public string Level { get; set; }
        public string GraduatedYear { get; set; }
        public string Institute { get; set; }
        public string GPA { get; set; }

    }
}
