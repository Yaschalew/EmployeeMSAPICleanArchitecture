using Domains.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domains.Interface
{
   public interface IJobInformation
    {
        public JobInformation AddJobInformation(JobInformation jobInformation);
        public IEnumerable<JobInformation> GetJobInformation();
        public JobInformation UpdateJobInformation(Guid id, JobInformation jobInformation);
        public JobInformation GetOneJobInformation(Guid id);
        public string DeleteJobInformation(Guid id);
    }
}
