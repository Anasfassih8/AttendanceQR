import { useState } from "react";
import LoginPage from "./LoginPage";
import AdminPage from "./AdminPage";
import StudentPage from "./StudentPage";

function App() {
  const [role, setRole] = useState(null); // "admin", "student", or null
  const [userId, setUserId] = useState(null); // for student id

  if (!role) return <LoginPage setRole={setRole} setUserId={setUserId} />;

  return role === "admin" ? <AdminPage /> : <StudentPage studentId={userId} />;
}

export default App;
