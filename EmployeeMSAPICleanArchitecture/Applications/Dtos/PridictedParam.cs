using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Applications.Dtos
{
   public class PridictedParam
    {
        public Guid? Id { get; set; }
        public string? searchKey { get; set; }
        public int? pageindex { get; set; }
       public int? pageSize { get; set; }
    }
}
