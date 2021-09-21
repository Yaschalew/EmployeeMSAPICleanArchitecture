using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IdentityAuth.Dtos
{
    public class UserManagerResponse
    {
        public string Message { get; set; }
        public Boolean IsSuccess { get; set; }
        public IEnumerable<string> Errors { get; set; }
        public DateTime? ExpireDatte { get; set; }
    }
}
