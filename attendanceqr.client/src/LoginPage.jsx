import { useState, useEffect } from "react";

function LoginPage({ setRole, setUserId }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Ensure body/html fill the screen
  useEffect(() => {
    document.body.style.margin = 0;
    document.body.style.height = "100vh";
    document.documentElement.style.height = "100%";
  }, []);

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
          minWidth: "300px",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "#fff", marginBottom: "1rem" }}>Login</h1>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            width: "100%",
            padding: "0.5rem",
            marginBottom: "1rem",
            borderRadius: "6px",
            border: "none",
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "0.5rem",
            marginBottom: "1rem",
            borderRadius: "6px",
            border: "none",
          }}
        />
        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "0.5rem",
            backgroundColor: "#7a3ff5",
            color: "#fff",
            fontWeight: "bold",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
        <p style={{ color: "#ff6b6b", marginTop: "1rem" }}>{error}</p>
      </div>
    </div>
  );
}

export default LoginPage;
