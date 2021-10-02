using System;

namespace Domains.Entities
{
    public class Attendance
    {
        public Guid ID { get; set; }
        public Guid Employee { get; set; }
        public DateTime LoginTime { get; set; }
        // This is the reason if not login late
        // Requested if not on time
        public string LoginDescription { get; set; }
        public DateTime LogoutTime { get; set; }
        // This is the reason if not logout early
        // Requested if not on time
        public string LogoutDescription { get; set; }
        // Accessible by the attendance admins
        public string Remark { get; set; }
    }
}
