using Models.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Applications.ViewModels
{
   public class EmployeeViewModel
    {
      public  IEnumerable<Employee> employees { get; set; }
    }
}
