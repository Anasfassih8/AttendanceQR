import { useState } from "react";

function LoginPage({ setRole, setUserId }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "1234") {
      setRole("admin");
    } else if (username === "student" && password === "1234") {
      setRole("student");
      setUserId(1); // example student ID
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Login</h1>
      <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <p style={{ color: "red" }}>{error}</p>
    </div>
  );
}

export default LoginPage;
