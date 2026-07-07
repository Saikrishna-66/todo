import React, { useState } from 'react';
import './signup.css';
import { signup } from '../../service/authService';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    const payload = {
      username: username,
      email: email,
      password: password,
      password2: password,
      user_type: 'employee', // or 'company'
    };

    try {
      const response = await signup(payload);
      console.log(response.data);
    } catch (error) {
      console.log(error.response?.data);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1>Create Account</h1>
        <p className="subtitle">Sign up to get started</p>

        <form onSubmit={handleSignup}>
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
             type="email"
             placeholder="Email"
             required
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             autoComplete="email"
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

          <button type="submit" className="signup-btn">
            Sign Up
          </button>
        </form>

        <p className="redirect-text">
          Already have an account? <a href="/Signin">Log in</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
