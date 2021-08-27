using Applications.Interfaces;
using Applications.Services;
using Domains.Interface;
using Infrastructures.Repository;
using Microsoft.Extensions.DependencyInjection;
using Models.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructures.IOC
{
   public static class DependencyControl
    {
        public static void RegisterServices(IServiceCollection services)
        {
            services.AddScoped<IEmployee, EmployeeRepository>();
            services.AddScoped<IemployeeService, EmployeeService>();
<<<<<<< HEAD
            services.AddScoped<IAttendance, AttendanceRepository>();
            services.AddScoped<IAttendanceService, AttendanceService>();
=======
            services.AddScoped<IEducation, EducationRepositiory>();
            services.AddScoped<IEducationService, EducationService>();
       

>>>>>>> 43ff8873892fb2690b1e4c51875d947e732ac9a4
        }
    }
}
