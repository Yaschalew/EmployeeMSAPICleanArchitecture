using Applications.Dtos;
using Applications.Interfaces;
using Applications.Mapping;
using Domains.Entities;
using Domains.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Applications.Services
{
   public class JobInformationService : IJobInformationService
    {
        private readonly IJobInformation _iJobInformation;
        public JobInformationService(IJobInformation iJobInformation)
        {
            _iJobInformation = iJobInformation;
        }
        public JobInformationItem AddJobInformation(JobInformationItem jobInformationItem)
        {
            MappJobInformation mappJobInformation = new MappJobInformation();

            _iJobInformation.AddJobInformation(mappJobInformation.mappToJobInformation(jobInformationItem));
            return jobInformationItem;
        }
        public string DeleteJobInformation(Guid id)
        {
            return _iJobInformation.DeleteJobInformation(id);
        }

        public JobInformationViewModel GetJobInformation()
        {

            return new JobInformationViewModel()
            {
                jobInformation = _iJobInformation.GetJobInformation()
            };
        }
        public JobInformationItem GetOneJobInformation(Guid id)
        {
            MappJobInformation mappJobInformation = new MappJobInformation();
            return mappJobInformation.mappToJobInformationItem(_iJobInformation.GetOneJobInformation(id));
        }

        public JobInformationItem UpdateJobInformation(Guid id, JobInformationItem jobInformationItem)
        {
            MappJobInformation mappJobInformation = new MappJobInformation();
            _iJobInformation.UpdateJobInformation(id, mappJobInformation.mappToJobInformation(jobInformationItem));
            return jobInformationItem;
        }

    }
}
