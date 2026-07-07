import React, { useState } from "react";
import './signin.css';
import { signin } from "../../service/authService";

function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      const response = await signin({ username, password });
      alert("Login successful!");
      console.log("Token:", response.data.token);
    } catch (error) {
      alert("Login failed: " + (error.response?.data?.error || "Unknown error"));
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-box">
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
