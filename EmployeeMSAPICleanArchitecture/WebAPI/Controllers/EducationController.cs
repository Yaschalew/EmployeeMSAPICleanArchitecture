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
    public class EducationController : ControllerBase
    {
        private readonly IEducationService _ieducationservice;
        public EducationController(IEducationService ieducationservice)
        {
            _ieducationservice = ieducationservice;
        }
        [HttpPost]
        public EducationItem AddEducation(EducationItem educationitem)
        {
            return _ieducationservice.AddEducation(educationitem);
        }
        [HttpGet]
        public EducationViewModel GetEducation()
        {
            return _ieducationservice.GetEducation();
        }
        [HttpPatch]
        public EducationItem UpdateEducation(Guid id, EducationItem educationItem)
        {
            return _ieducationservice.UpdateEducation(id, educationItem);
        }
        [HttpDelete("{id}")]
        public string DeleteEducation(Guid id)
        {
            return _ieducationservice.DeleteEducation(id);
        }

        [HttpGet("{id}")]
        public EducationItem GetOneEducation(Guid id)
        {
            return _ieducationservice.GetOneEducation(id);
        }
    }
}
