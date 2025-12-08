using System;
namespace AttendanceQR.Server.Models
{

	public class AttendanceRecord
	{

        public int Id { get; set; }
        public int StudentId { get; set; }
        public int QRCodeId { get; set; }
        public DateTime Timestamp { get; set; }

        public Student Student { get; set; }
        public QRCode QRCode { get; set; }

    }


}
