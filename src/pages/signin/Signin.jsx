import React, { useState } from "react";
import './signin.css';
import Toast from "../../components/Toast";
import { signin } from "../../service/authService";
import { useNavigate } from "react-router";

function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [toast, setToast] = useState({ message: "", type: "info" });

  const navigate = useNavigate();

  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      const response = await signin({ username, password });
      const token = response?.data?.token || response?.data?.access_token;
      const message = response?.data?.message || "Login successful!";

      if (token) {
        localStorage.setItem("token", token);
      }

      setToast({ message, type: "success" });
      console.log("Token:", token);
      navigate("/home");
    } catch (error) {
      const apiMessage = error?.response?.data?.message || error?.response?.data?.error || "Invalid credentials";
      setToast({ message: apiMessage, type: "error" });
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-box">
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ message: "", type: "info" })}
        />
        <h1>Welcome Back</h1>
        <p className="subtitle">Sign in to continue</p>

        <form onSubmit={handleSignin}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
          </div>

          <button type="submit" className="signin-btn">Sign In</button>
        </form>

        <p className="redirect-text">
          Don’t have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default Signin;
