import { useState } from "react";

function App() {
  const [studentId, setStudentId] = useState("");
  const [sessionId, setSessionId] = useState("");
  const [message, setMessage] = useState("");

  const handleCheckIn = async () => {
    try {
      const response = await fetch("https://localhost:7208/api/attendance/checkin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          studentId: parseInt(studentId),
          sessionId: parseInt(sessionId)
        })
      });

      const data = await response.json();
      setMessage(data.message);
    } catch (err) {
      setMessage("Error: " + err.message);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Attendance Check-In</h1>
      <input
        type="number"
        placeholder="Student ID"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
      />
      <input
        type="number"
        placeholder="Session ID"
        value={sessionId}
        onChange={(e) => setSessionId(e.target.value)}
      />
      <button onClick={handleCheckIn}>Check In</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
