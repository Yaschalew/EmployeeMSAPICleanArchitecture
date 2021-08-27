using Applications.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Applications.Interfaces
{
    public interface IExperienceService
    {
        public ExperienceItem AddExperience(ExperienceItem experience);
        public ExperienceViewMode GetExperience();
        public ExperienceItem UpdateExperience(Guid id, ExperienceItem experience);
        public ExperienceItem GetOneExperience(Guid id);
        public string DeleteExperience(Guid id);
    }
}
