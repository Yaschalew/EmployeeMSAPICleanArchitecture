﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Applications.ViewModels
{
   public class EmployeeItem
    {
        public Guid Id { get; set; }
        public string FName { get; set; }
        public string LName { get; set; }
        public string MName { get; set; }
        public string Gender { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public DateTime BirtDate { get; set; }
        public string Address { get; set; }
        public DateTime HiredAt { get; set; }
        public string Status { get; set; }

    }
}
