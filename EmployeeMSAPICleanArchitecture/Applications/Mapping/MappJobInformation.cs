using Applications.Dtos;
using Domains.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Applications.Mapping
{
   public class MappJobInformation
    {
        public JobInformation mappToJobInformation(JobInformationItem jobInformationItem)
        {
            JobInformation jobInformation = new JobInformation();
            jobInformation.Id = jobInformationItem.Id;
            jobInformation.EmployeeId = jobInformationItem.EmployeeId;
            jobInformation.PositinId = jobInformationItem.PositinId;
            jobInformation.Role = jobInformationItem.Role;
            jobInformation.HiredDate = jobInformationItem.HiredDate;
            jobInformation.status = jobInformationItem.status;
            jobInformation.Remark = jobInformationItem.Remark;
            return jobInformation;

        }

        public JobInformationItem mappToJobInformationItem(JobInformation jobInformation)
        {
            JobInformationItem jobInformationItem = new JobInformationItem();
           jobInformationItem.Id =jobInformation.Id;
           jobInformationItem.EmployeeId =jobInformation.EmployeeId;
           jobInformationItem.PositinId =jobInformation.PositinId;
           jobInformationItem.Role =jobInformation.Role;
           jobInformationItem.HiredDate =jobInformation.HiredDate;
           jobInformationItem.status =jobInformation.status;
           jobInformationItem.Remark = jobInformation.Remark;
            return jobInformationItem;

        }
        public JobInformation mappToJobInformationInstance(JobInformation existJobInformation,JobInformation newJobInformation)
        {
            existJobInformation.EmployeeId = newJobInformation.EmployeeId;
            existJobInformation.PositinId = newJobInformation.PositinId;
            existJobInformation.Role = newJobInformation.Role;
            existJobInformation.HiredDate = newJobInformation.HiredDate;
            existJobInformation.status = newJobInformation.status;
            existJobInformation.Remark = newJobInformation.Remark;
            return existJobInformation;

        }
    }
}
