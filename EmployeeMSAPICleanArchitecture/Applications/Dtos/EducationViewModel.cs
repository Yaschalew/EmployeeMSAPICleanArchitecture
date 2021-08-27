using Domains.Entities;
using System.Collections.Generic;

namespace Applications.Dtos
{
    public class EducationViewModel
    {
        public IEnumerable<Education> educations { get; set; }
    }
}
