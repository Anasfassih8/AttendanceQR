namespace AttendanceQR.Server.Models
{
    public class QRCode
    {
        public int Id { get; set; }
        public string Data { get; set; }
        public DateTime Expiration { get; set; }

      
    }
}
