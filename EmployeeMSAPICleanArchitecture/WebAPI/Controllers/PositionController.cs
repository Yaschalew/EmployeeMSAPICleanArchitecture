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
    public class PositionController : ControllerBase
    {
        private readonly IpositionService _ipositionService;
        public PositionController(IpositionService ipositionService)
        {
            _ipositionService = ipositionService;
        }
        [HttpPost]
        public PositionItem AddPosition(PositionItem positionItem)
        {
            return _ipositionService.AddPosition(positionItem);
        }
        [HttpGet]
        public PositionViewModel GetPosition()
        {
            return _ipositionService.GetPosition();
        }
        [HttpPatch("{id}")]
        public PositionItem UpdateEmployee(Guid id, PositionItem positionItem)
        {
            return _ipositionService.UpdatePosition(id, positionItem);
        }
        [HttpDelete("{id}")]
        public string DeleteEmployee(Guid id)
        {
            return _ipositionService.DeletePosition(id);
        }
        [HttpGet("{id}")]
        public PositionItem GetOneEmployee(Guid id)
        {
            return _ipositionService.GetOnePosition(id);
        }
    }
}
