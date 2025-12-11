using Microsoft.AspNetCore.Mvc;
using AttendanceQR.Server.Models;
using AttendanceQR.Server.DTO;
using System;
using System.Collections.Generic;
using System.Linq;

namespace AttendanceQR.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AttendanceController : ControllerBase
    {
        // In-memory storage for simplicity
        private static List<AttendanceRecord> AttendanceRecords = new List<AttendanceRecord>();
        private static List<QRCode> QrCodes = new List<QRCode>();

        // POST: api/attendance/checkin
        [HttpPost("checkin")]
        public IActionResult CheckIn([FromBody] CheckInRequest request)
        {
            // Validate QR code exists and is not expired
            var qr = QrCodes.SingleOrDefault(q => q.Id == request.QrCodeId && q.Expiration > DateTime.UtcNow);
            if (qr == null)
                return BadRequest(new { message = "Invalid or expired QR code." });

            var record = new AttendanceRecord
            {
                Id = AttendanceRecords.Count + 1,
                StudentId = request.StudentId,
                QRCodeId = qr.Id,
                Timestamp = DateTime.UtcNow
            };

            AttendanceRecords.Add(record);
            return Ok(new { message = "Attendance recorded successfully", record });
        }

        // POST: api/attendance/generate
        [HttpPost("generate")]
        public IActionResult GenerateQr()
        {
            var random = new Random();
            var QrId = random.Next(1000, 10000);
            var qr = new QRCode
            {
                Id = QrId,
                Data = Guid.NewGuid().ToString(), // unique string
                Expiration = DateTime.UtcNow.AddMinutes(1)
            };

            QrCodes.Add(qr);

            return Ok(new { qr.Id, qr.Data, qr.Expiration });
        }

        [HttpGet]
        public IActionResult GetAll() => Ok(AttendanceRecords);
    }
}

  
