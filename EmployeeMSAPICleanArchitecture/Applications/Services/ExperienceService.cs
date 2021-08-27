using Applications.Dtos;
using Applications.Interfaces;
using Domains.Entities;
using Domains.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Applications.Services
{
    public class ExperienceService : IExperienceService
    {
        private readonly IExperience _iExperience;
        public ExperienceService(IExperience iEmployee)
        {
            _iExperience = iEmployee;
        }
        public ExperienceItem AddExperience(ExperienceItem experienceItem)
        {
            Experience experience = new Experience();
            experience.Company = experienceItem.Company;
            experience.EmployeId = experienceItem.EmployeId;
            experience.Position = experienceItem.Position;
            experience.Remark = experienceItem.Remark;
            experience.ResignReason = experienceItem.ResignReason;
            experience.Salary = experienceItem.Salary;
            experience.Year = experienceItem.Year;

            _iExperience.AddExperience(experience);
            return experienceItem;
            
        }

        public ExperienceViewMode GetExperience()
        {
            return new ExperienceViewMode()
            {
                experiences = _iExperience.GetExperience()
            };
        }

        public ExperienceItem UpdateExperience(Guid id, ExperienceItem experienceItem)
        {
            Experience experience = new Experience();
            experience.EmployeId = experienceItem.EmployeId;
            experience.Position = experienceItem.Position;
            experience.Remark = experienceItem.Remark;
            experience.ResignReason = experienceItem.ResignReason;
            experience.Salary = experienceItem.Salary;
            experience.Year = experienceItem.Year;
            experience.Company = experienceItem.Company;

            _iExperience.UpdateExperience(id, experience);
            return experienceItem;
        }

        public ExperienceItem GetOneExperience(Guid id)
        {
            Experience experience = new Experience();
            ExperienceItem educationItem = new ExperienceItem();
            experience = _iExperience.GetOneExperience(id);

            educationItem.EmployeId = experience.EmployeId;
            educationItem.Year = experience.Year;
            educationItem.Salary = experience.Salary;
            educationItem.ResignReason = experience.ResignReason;
            educationItem.Remark = experience.Remark;
            educationItem.Company = experience.Company;
            educationItem.Position = experience.Position;

            return educationItem;
        }

        public string DeleteExperience(Guid id)
        {
            return _iExperience.DeleteExperience(id);
        }

      
    }
}
