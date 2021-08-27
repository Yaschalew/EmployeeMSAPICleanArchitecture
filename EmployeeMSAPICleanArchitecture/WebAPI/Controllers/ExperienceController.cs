using Applications.Dtos;
using Applications.ViewModels;
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
    public class ExperienceController : ControllerBase
    {

        private readonly IExperienceService _iexperienceservice;
        public ExperienceController(IExperienceService iexperienceservice)
        {
            _iexperienceservice = iexperienceservice;
        }
        [HttpPost]
        public ExperienceItem AddExperience(ExperienceItem experienceItem)
        {
            return _iexperienceservice.AddExperience(experienceItem);
        }
        [HttpGet]
        public ExperienceViewMode GetExperience()
        {
            return _iexperienceservice.GetExperience();
        }
        [HttpPatch]
        public ExperienceItem UpdateExperience(Guid id, ExperienceItem employeeItem)
        {
            return _iexperienceservice.UpdateExperience(id, employeeItem);

        }
        [HttpDelete("{id}")]
        public string DeleteExperience(Guid id)
        {
            return _iexperienceservice.DeleteExperience(id);
        }
        [HttpGet("{id}")]
        public ExperienceItem GetOneExperience(Guid id)
        {
            return _iexperienceservice.GetOneExperience(id);
        }

    }
}
