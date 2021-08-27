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
   public class JobInformationService : IJobInformationService
    {
        private readonly IJobInformation _iJobInformation;
        public JobInformationService(IJobInformation iJobInformation)
        {
            _iJobInformation = iJobInformation;
        }
        public JobInformationItem AddJobInformation(JobInformationItem jobInformationItem)
        {
            JobInformation jobInformation = new JobInformation();
            jobInformation.EmployeeId= jobInformationItem.EmployeeId;
            jobInformation.PositinId = jobInformationItem.PositinId;
            jobInformation.Remark = jobInformationItem.Remark;

            _iJobInformation.AddJobInformation(jobInformation);
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
            JobInformationItem jobInformationItem = new JobInformationItem();
            JobInformation jobInformation = new JobInformation();
            jobInformation = _iJobInformation.GetOneJobInformation(id);
            jobInformationItem.EmployeeId = jobInformation.EmployeeId;
            jobInformationItem.PositinId = jobInformation.PositinId;
            jobInformationItem.Remark = jobInformation.Remark;
            return jobInformationItem;
        }

        public JobInformationItem UpdateJobInformation(Guid id, JobInformationItem jobInformationItem)
        {
            JobInformation jobInformation = new JobInformation();
            jobInformation.EmployeeId = jobInformationItem.EmployeeId;
            jobInformation.PositinId = jobInformationItem.PositinId;
            jobInformation.Remark = jobInformationItem.Remark;

            _iJobInformation.UpdateJobInformation(id, jobInformation);
            return jobInformationItem;
        }

    }
}
