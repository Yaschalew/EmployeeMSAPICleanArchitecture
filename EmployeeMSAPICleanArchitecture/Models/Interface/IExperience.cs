using Domains.Entities;
using System;
using System.Collections.Generic;

namespace Domains.Interface
{
    public interface IExperience
    {
        public Experience AddExperience(Experience experience);
        public Experience UpdateExperience(Guid id,Experience experience);
        public string DeleteExperience(Guid id);
        public Experience GetOneExperience(Guid id);
        public IEnumerable<Experience> GetExperience();


    }
}
