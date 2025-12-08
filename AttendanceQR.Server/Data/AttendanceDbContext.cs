using AttendanceQR.Server.Models;
using Microsoft.EntityFrameworkCore;
namespace AttendanceQR.Server.Data
{
    public class AttendanceDbContext : DbContext
    {
        public AttendanceDbContext(DbContextOptions<AttendanceDbContext> options) : base(options) { }

        public DbSet<Student> Students { get; set; }
        public DbSet<QRCode> QRCodes { get; set; }
        public DbSet<AttendanceRecord> AttendanceRecords { get; set; }
    }

}