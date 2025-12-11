import { useState } from "react";

function StudentPage({ studentId }) {
  const [qrCodeId, setQrCodeId] = useState("");
  const [message, setMessage] = useState("");

  const handleCheckIn = async () => {
    try {
      const response = await fetch("http://localhost:5008/api/attendance/checkin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ studentId, qrCodeId: parseInt(qrCodeId) })
      });
      const data = await response.json();
      if (response.ok) setMessage(data.message);
      else setMessage(data.message || "Error");
    } catch (err) {
      setMessage("Error: " + err.message);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Student Check-In</h1>
      <input
        type="number"
        placeholder="QR Code ID"
        value={qrCodeId}
        onChange={(e) => setQrCodeId(e.target.value)}
      />
      <button onClick={handleCheckIn}>Check In</button>
      <p>{message}</p>
    </div>
  );
}

export default StudentPage;
