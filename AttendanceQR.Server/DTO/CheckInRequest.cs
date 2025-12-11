namespace AttendanceQR.Server.DTO
{
    public class CheckInRequest
    {
        public int StudentId { get; set; }
        public int QrCodeId { get; set; }
    }
}
