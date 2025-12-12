import { useState } from "react";

function StudentPage({ studentId }) {
  const [qrCodeId, setQrCodeId] = useState("");
  const [message, setMessage] = useState("");

  const handleCheckIn = async () => {
    try {
      const response = await fetch("http://localhost:5008/api/attendance/checkin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ studentId, qrCodeId: parseInt(qrCodeId) }),
      });
      const data = await response.json();
      if (response.ok) setMessage(data.message);
      else setMessage(data.message || "Error");
    } catch (err) {
      setMessage("Error: " + err.message);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#2c0d4d",
      }}
    >
      <div
        style={{
          backgroundColor: "#3d1a6f",
          padding: "2rem",
          borderRadius: "12px",
          boxShadow: "0 0 20px rgba(0,0,0,0.5)",
          minWidth: "350px",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "#fff", marginBottom: "1rem" }}>Student Check-In</h1>
        <input
          type="number"
          placeholder="QR Code ID"
          value={qrCodeId}
          onChange={(e) => setQrCodeId(e.target.value)}
          style={{
            width: "100%",
            padding: "0.5rem",
            borderRadius: "6px",
            border: "none",
            marginBottom: "1rem",
          }}
        />
        <button
          onClick={handleCheckIn}
          style={{
            width: "100%",
            padding: "0.5rem",
            backgroundColor: "#7a3ff5",
            color: "#fff",
            fontWeight: "bold",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            marginBottom: "1rem",
          }}
        >
          Check In
        </button>
        {message && (
          <p style={{ color: "#fff", marginTop: "0.5rem", fontWeight: "bold" }}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default StudentPage;
