using Domains.Entities;
using Microsoft.EntityFrameworkCore;
using Models.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructures.Context
{
   public class AppDbContext:DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
        public DbSet<Attendance> Attendances { get; set; }
        public DbSet<EmployeeId> Employees { get; set; }
        public DbSet<Education> Educations { get; set; }

        public DbSet<JobInformation> JobInformations { get; set; }

        public DbSet<Experience> Experiences { get; set; }
        public DbSet<Position> Positions { get; set; }

    }
}
