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
   public class JobInformationRepository : IJobInformation
    {
        private readonly AppDbContext _context;
        public JobInformationRepository(AppDbContext context)
        {
            _context = context;
        }
        public JobInformation AddJobInformation(JobInformation jobInformation)
        {
            _context.JobInformations.Add(jobInformation);
            _context.SaveChanges();
            return jobInformation;
        }

        public string DeleteJobInformation(Guid id)
        {
            var existJobInformation = _context.JobInformations.Find(id);
            _context.JobInformations.Remove(existJobInformation);
            _context.SaveChanges();
            return "Successfully Deleted.";

        }

        public IEnumerable<JobInformation> GetJobInformation()
        {
            return _context.JobInformations;
        }

        public JobInformation GetOneJobInformation(Guid id)
        {
            return _context.JobInformations.Find(id);

        }

        public JobInformation UpdateJobInformation(Guid id, JobInformation jobInformation)
        {
            var existJobInformation = _context.JobInformations.Find(id);
            existJobInformation.EmployeeId = jobInformation.EmployeeId;
            existJobInformation.PositinId = jobInformation.PositinId;
            existJobInformation.Remark = jobInformation.Remark;
            _context.Entry(existJobInformation).State = EntityState.Modified;
            _context.SaveChanges();
            return existJobInformation;
        }
    }
}
