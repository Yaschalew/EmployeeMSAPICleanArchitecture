using Applications.Dtos;
using System;

namespace Applications.Interfaces
{
    public interface IJobInformationService
    {
        public JobInformationItem AddJobInformation(JobInformationItem jobInformation);
        public JobInformationViewModel GetJobInformation();
        public JobInformationItem UpdateJobInformation(Guid id, JobInformationItem jobInformation);
        public JobInformationItem GetOneJobInformation(Guid id);
        public string DeleteJobInformation(Guid id);
    }
}
