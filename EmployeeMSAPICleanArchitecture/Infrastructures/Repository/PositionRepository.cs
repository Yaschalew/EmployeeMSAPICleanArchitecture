using Domains.Entities;
using Infrastructures.Context;
using Microsoft.EntityFrameworkCore;
using Models.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructures.Repository
{
    public class PositionRepository : IPosition
    {
        private readonly AppDbContext _context;
        public PositionRepository(AppDbContext context)
        {
            _context = context;
        }
        public Position AddPosition(Position position)
        {
            _context.Positions.Add(position);
            _context.SaveChanges();
            return position;
        }

        public string DeletePosition(Guid id)
        {
            var existPosition = _context.Positions.Find(id);
            _context.Positions.Remove(existPosition);
            _context.SaveChanges();
            return "Successfully Deleted.";
        }

        public Position GetOnePosition(Guid id)
        {
            return _context.Positions.Find(id);
        }

        public IEnumerable<Position> GetPosition()
        {
            return _context.Positions;
        }

        public Position UpdatePosition(Guid id, Position position)
        {
            var existPosition = _context.Positions.Find(id);
            existPosition.Name = position.Name;
            existPosition.Salary = position.Salary;
            existPosition.Remark = position.Remark;
            _context.Entry(existPosition).State = EntityState.Modified;
            _context.SaveChanges();
            return existPosition;
        }
    }
}
