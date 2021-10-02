using Domains.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.Interface
{
    public interface IPosition
    {
        public Position AddPosition(Position position);
        public IEnumerable<Position> GetPosition();
        public Position UpdatePosition(Guid id, Position position);
        public Position GetOnePosition(Guid id);
        public string DeletePosition(Guid id);

    }
}
