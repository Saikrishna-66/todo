import React, { useState } from 'react';
import './signup.css';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log({ username, email, password });
  };

  return (
    <>
      <div className="auth-page-container">
        
        <div className="phone-mockup">
          <div className="dynamic-island"></div>

          <div className="content-layer">
            
            <div className="header-section">
              <h1>Create Account</h1>
              <p>Sign up to get started</p>
            </div>

            <form onSubmit={handleSubmit} className="form-section">
              
              {/* Username Input */}
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="pill-input"
                  required
                />
              </div>

              {/* Email Input */}
              <div className="input-group">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pill-input"
                  required
                />
              </div>

              {/* Password Input */}
              <div className="input-group">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pill-input"
                  required
                />
              </div>

              {/* Submission Action */}
              <div className="action-row" style={{ marginTop: '20px' }}>
                <span className="action-label">Sign up</span>
                <button type="submit" className="circle-submit-btn">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>

            </form>

            {/* Redirection Link */}
            <div className="social-footer">
              <p className="social-footer-text">
                Already have an account? <a href="#signin">Log in</a>
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;