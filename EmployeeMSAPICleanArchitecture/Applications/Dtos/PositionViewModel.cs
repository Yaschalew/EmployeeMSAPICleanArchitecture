using Domains.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Applications.Dtos
{
    public class PositionViewModel
    {
        public IEnumerable<Position> positions { get; set; }
    }
}
