using Domains.Entities;
using Domains.Interface;
using Infrastructures.Context;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructures.Repository
{
    public class ExperienceRepository : IExperience
    {
        private readonly AppDbContext _context;
        public ExperienceRepository(AppDbContext context)
        {
            _context = context;
        }

        public Experience AddExperience(Experience experience)
        {
            _context.Experiences.Add(experience);
            _context.SaveChanges();
            return experience;
        }

        public string DeleteExperience(Guid id)
        {
            var stored_data = _context.Experiences.Find(id);
            _context.Experiences.Remove(stored_data);
            _context.SaveChanges();

            return "Sucessfully Deleted";
        }

        public IEnumerable<Experience> GetExperience()
        {
            return _context.Experiences;
        }

        public Experience GetOneExperience(Guid id)
        {
            return _context.Experiences.Find(id);
        }

        public Experience UpdateExperience(Guid id, Experience experience)
        {
            var stored_data = _context.Experiences.Find(id);
            stored_data.EmployeId = experience.EmployeId;
            stored_data.Company = experience.Company;
            stored_data.Position = experience.Position;
            stored_data.Remark = experience.Remark;
            stored_data.Salary = experience.Salary;
            stored_data.Year = experience.Salary;
            stored_data.ResignReason = experience.ResignReason;

            _context.Entry(stored_data).State = EntityState.Modified;
            _context.SaveChanges();
            return stored_data;

        }
    }
}
