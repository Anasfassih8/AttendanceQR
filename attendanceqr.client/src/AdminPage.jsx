import { useState } from "react";

function AdminPage() {
  const [qr, setQr] = useState(null);

  const handleGenerateQr = async () => {
    try {
      const response = await fetch("http://localhost:5008/api/attendance/generate", {
        method: "POST",
      });
      const data = await response.json();
      setQr(data);
    } catch (err) {
      console.error(err);
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
        <h1 style={{ color: "#fff", marginBottom: "1rem" }}>Admin Panel</h1>
        <button
          onClick={handleGenerateQr}
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
          Generate QR Code
        </button>
        {qr && (
          <div
            style={{
              marginTop: "1rem",
              backgroundColor: "#4e1c88",
              padding: "1rem",
              borderRadius: "8px",
              color: "#fff",
              textAlign: "left",
            }}
          >
            <p><strong>QR Code ID:</strong> {qr.id}</p>
            <p><strong>QR Code Data:</strong> {qr.data}</p>
            <p><strong>Expires:</strong> {new Date(qr.expiration).toLocaleTimeString()}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminPage;
