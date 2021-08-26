using Domains.Entities;
using System;
using System.Collections.Generic;

namespace Domains.Interface
{
    public interface IEducation
    {
        public Education AddEducation(Education education);
        public Education UpdateEducation(Guid id,Education education);
        public IEnumerable<Education> GetEducation();
        public Education GetOneEducation(Guid id);
        public string DeleteEducation(Guid id);



    }
}
