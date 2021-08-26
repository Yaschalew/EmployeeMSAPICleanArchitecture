using Applications.Dtos;
using System;

namespace Applications.Interfaces
{
    public interface IEducationService
    {
        public EducationItem AddEducation(EducationItem education);
        public EducationViewModel GetEducation();
        public EducationItem UpdateEducation(Guid id, EducationItem employee);
        public EducationItem GetOneEducation(Guid id);
        public string DeleteEducation(Guid id);

    }
}
