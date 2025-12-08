using Microsoft.AspNetCore.Mvc;
using AttendanceQR.Server.Models;
using System.Collections.Generic;
using System;

namespace AttendanceQR.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AttendanceController : ControllerBase
    {
        private static List<AttendanceRecord> records = new List<AttendanceRecord>();

        [HttpPost("checkin")]
        public IActionResult CheckIn([FromBody] AttendanceRecord record)
        {
            record.Id = records.Count + 1;
            record.Timestamp = DateTime.UtcNow;
            records.Add(record);
            return Ok(new { message = "Attendance recorded successfully", record });
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(records);
        }
    }
}
