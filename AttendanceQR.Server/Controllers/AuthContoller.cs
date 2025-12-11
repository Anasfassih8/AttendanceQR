using Microsoft.AspNetCore.Mvc;

namespace AttendanceQR.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        public class LoginRequest
        {
            public string Username { get; set; }
            public string Password { get; set; }
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginRequest request)
        {
            if ((request.Username == "admin" && request.Password == "1234") ||
                (request.Username == "student" && request.Password == "1234"))
            {
                var role = request.Username == "admin" ? "admin" : "student";
                return Ok(new { message = "Login successful", role });
            }

            return Unauthorized(new { message = "Invalid credentials" });
        }
    }
}
