using Applications.Dtos;
using Applications.Interfaces;
using Domains.Entities;
using Models.Interface;
using System;

namespace Applications.Services
{
    public  class PositionServices : IpositionService
   {
        private readonly IPosition _iPosition;

        public PositionServices(IPosition iPosition)
        {
            _iPosition = iPosition;
        }
        public PositionItem AddPosition(PositionItem positionItem)
        {
            Position position = new Position();
            position.Name = positionItem.Name;
            position.Salary = positionItem.Salary;
            position.Remark = positionItem.Remark;

            _iPosition.AddPosition(position);
            return positionItem;
        }

        public string DeletePosition(Guid id)
        {
            return _iPosition.DeletePosition(id);
        }

        public PositionItem GetOnePosition(Guid id)
        {
            PositionItem positionItem = new PositionItem();
            Position position = new Position();
            position = _iPosition.GetOnePosition(id);
            positionItem.Name = position.Name;
            positionItem.Salary = position.Salary;
            positionItem.Remark = position.Remark;
            return positionItem;
        }

        public PositionViewModel GetPosition()
        {
            return new PositionViewModel()
            {
                positions = _iPosition.GetPosition()
            };
        }

        public PositionItem UpdatePosition(Guid id, PositionItem positionItem)
        {
            Position position = new Position();
            position.Name = positionItem.Name;
            position.Salary = positionItem.Salary;
            position.Remark = positionItem.Remark;

            _iPosition.UpdatePosition(id, position);

            return positionItem;
        }
    }
}
