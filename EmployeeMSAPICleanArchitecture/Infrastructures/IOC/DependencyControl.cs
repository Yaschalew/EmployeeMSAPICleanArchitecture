using Applications.Interfaces;
using Applications.Services;
using Domains.Interface;
using IdentityAuth.Services;
using Infrastructures.Repository;
using Microsoft.Extensions.DependencyInjection;
using Models.Entities;
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
           
            services.AddScoped<IEmployee<Employee>, EmployeeRepository>();
            services.AddScoped<IemployeeService, EmployeeService>();
            services.AddScoped<IEducation, EducationRepositiory>();

            services.AddScoped<IEducationService, EducationService>(); 
            services.AddScoped<IJobInformation, JobInformationRepository>();
            services.AddScoped<IJobInformationService, JobInformationService>();
            services.AddScoped<IExperience, ExperienceRepository>(); 
            services.AddScoped<IExperienceService, ExperienceService>();

            services.AddScoped<IPosition, PositionRepository>(); 
            services.AddScoped<IpositionService, PositionServices>();

            services.AddScoped<IAuthService, AuthService>();
            services.AddScoped<IAuth, AuthRepository>();
            

        }
    }
}
