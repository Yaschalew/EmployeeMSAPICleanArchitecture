using Applications.Dtos;
using Applications.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobInformationController : ControllerBase
    {
        private readonly IJobInformationService _iJobInformationService;
        public JobInformationController(IJobInformationService iJobInformationService)
        {
            _iJobInformationService = iJobInformationService;
        }
        [HttpPost]
        public JobInformationItem AddJobInformation(JobInformationItem jobInformationItem)
        {
            return _iJobInformationService.AddJobInformation(jobInformationItem);
        }
        [HttpGet]
        public JobInformationViewModel GetJobInformation()
        {
            return _iJobInformationService.GetJobInformation();
        }
        [HttpPatch("{id}")]
        public JobInformationItem UpdateJobInformation(Guid id, JobInformationItem jobInformationItem)
        {
            return _iJobInformationService.UpdateJobInformation(id, jobInformationItem);
        }
        [HttpDelete("{id}")]
        public string DeleteJobInformation(Guid id)
        {
            return _iJobInformationService.DeleteJobInformation(id);
        }
        [HttpGet("{id}")]
        public JobInformationItem GetOneJobInformation(Guid id)
        {
            return _iJobInformationService.GetOneJobInformation(id);
        }
    }
}
