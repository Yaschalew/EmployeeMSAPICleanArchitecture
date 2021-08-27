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
        public DbSet<Employee> Employees { get; set; }
<<<<<<< HEAD
        public DbSet<Attendance> Attendances { get; set; }
=======
        public DbSet<Education> Educations { get; set; }
>>>>>>> 43ff8873892fb2690b1e4c51875d947e732ac9a4
    }
}
