
using Applications.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Applications.Interfaces
{
    public interface IpositionService
    {
        public PositionItem AddPosition(PositionItem position);
        public PositionViewModel GetPosition();
        public PositionItem UpdatePosition(Guid id, PositionItem position);
        public PositionItem GetOnePosition(Guid id);
        public string DeletePosition(Guid id);
    }
}
