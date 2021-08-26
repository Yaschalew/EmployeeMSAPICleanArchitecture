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
            services.AddScoped<IEducation, EducationRepositiory>();
            services.AddScoped<IEducationService, EducationService>();
       

        }
    }
}
