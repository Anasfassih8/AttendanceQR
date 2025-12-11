import { useState } from "react";

function AdminPage() {
  const [qr, setQr] = useState(null);

  const handleGenerateQr = async () => {
    try {
      const response = await fetch("http://localhost:5008/api/attendance/generate", { method: "POST" });
      const data = await response.json();
      setQr(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Admin Panel</h1>
      <button onClick={handleGenerateQr}>Generate QR Code</button>
      {qr && (
        <div style={{ marginTop: "1rem" }}>
          <p>QR Code ID: {qr.id}</p>
          <p>QR Code Data: {qr.data}</p>
          <p>Expires: {new Date(qr.expiration).toLocaleTimeString()}</p>
        </div>
      )}
    </div>
  );
}

export default AdminPage;
