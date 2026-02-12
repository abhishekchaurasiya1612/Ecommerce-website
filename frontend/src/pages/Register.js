import { useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    await axiosInstance.post("/auth/register", {
      username,
      email,
      password,
  role: 'user'
    });

    navigate("/login");
  };

  return (
    <div>
      <h2>Register</h2>

      <input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;
