using Domains.Entities;
using Domains.Interface;
using Infrastructures.Context;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;

namespace Infrastructures.Repository
{
    public class EducationRepositiory : IEducation
    {
        private readonly AppDbContext _context;
        public EducationRepositiory(AppDbContext context)
        {
            _context = context;
        }
        public Education AddEducation(Education education)
        {
            _context.Educations.Add(education);
            _context.SaveChanges();

            return education;

        }

        public string DeleteEducation(Guid id)
        {
            var stored_data = _context.Educations.Find(id);
            _context.Educations.Remove(stored_data);

            _context.SaveChanges();
            return "Sucessfully Deleted";
        }

        public IEnumerable<Education> GetEducation()
        {
            return _context.Educations;
        }

        public Education GetOneEducation(Guid id)
        {
            return _context.Educations.Find(id);
        }

        public Education UpdateEducation(Guid id,Education education)
        {
            var stored_record = _context.Educations.Find(id);
            stored_record.Level = education.Level;
            stored_record.GraduatedYear = education.GraduatedYear;
            stored_record.Institute = education.Institute;
            stored_record.GPA = education.GPA;
            _context.Entry(stored_record).State = EntityState.Modified;
            _context.SaveChanges();
            return stored_record;

        }

    }
}
