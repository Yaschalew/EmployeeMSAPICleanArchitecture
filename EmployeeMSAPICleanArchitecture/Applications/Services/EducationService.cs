using Applications.Dtos;
using Applications.Interfaces;
using Domains.Entities;
using Domains.Interface;
using System;

namespace Applications.Services
{
    public class EducationService : IEducationService
    {
        private readonly IEducation _iEducation;

        public EducationService(IEducation ieducation)
        {
            _iEducation = ieducation;
        }

        public EducationItem AddEducation(EducationItem educationItem)
        {
            Education education = new Education();
            education.EmployeeId = educationItem.EmployeeId;
            education.Level = educationItem.Level;
            education.GraduatedYear = educationItem.GraduatedYear;
            education.Institute = educationItem.Institute;
            education.GPA = educationItem.GPA;

            _iEducation.AddEducation(education);

            return educationItem;

        }

        public string DeleteEducation(Guid id)
        {
            return _iEducation.DeleteEducation(id);
        }

        public EducationViewModel GetEducation()
        {
            return new EducationViewModel()
            {
                educations = _iEducation.GetEducation()
            };
        }

        public EducationItem GetOneEducation(Guid id)
        {
            Education education = new Education();
            EducationItem educationItem = new EducationItem();
            education = _iEducation.GetOneEducation(id);

            educationItem.EmployeeId = education.EmployeeId;
            educationItem.Level = education.Level;
            educationItem.GraduatedYear = education.GraduatedYear;
            educationItem.Institute = education.Institute;
            educationItem.GPA = education.GPA;

            return educationItem;

        }

        public EducationItem UpdateEducation(Guid id, EducationItem educationItem)
        {
            Education education = new Education();
            education.EmployeeId = educationItem.EmployeeId;
            education.Level = educationItem.Level;
            education.GraduatedYear = educationItem.GraduatedYear;
            education.Institute = educationItem.Institute;
            education.GPA = educationItem.GPA;

            _iEducation.UpdateEducation(id, education);
            return educationItem;

           
        }
    }
}
