using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Applications.Dtos
{
   public class LoginRespons
    {
       public string Message { get; set; }
        public string Email { get; set; }
       public Boolean IsSuccess { get; set; }
    }
}
