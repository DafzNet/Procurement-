// src/components/Auth/Login.js


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, setAuthToken } from '../../api';

const Login = () => {
  /*const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await login({ email, password });
      const { token } = response.data;
      localStorage.setItem('token', token);
      setAuthToken(token);
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid credentials. Please try again.');
    }
  };*/
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await login({ email, password });
      const { userId, name } = response.data;
      setUser({ id: userId, name, email });
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid credentials. Please try again.');
    }
  };


  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(to right, #e0f2fe, #e0e7ff)',
    fontFamily: 'Arial, sans-serif',
  };

  const cardStyle = {
    width: '100%',
    maxWidth: '400px',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    background: 'white',
  };

  const headerStyle = {
    marginBottom: '1.5rem',
    textAlign: 'center',
  };

  const titleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '0.5rem',
  };

  const subtitleStyle = {
    fontSize: '0.875rem',
    color: '#6b7280',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  };

  const inputContainerStyle = {
    position: 'relative',
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem 2.5rem 0.75rem 2.5rem',
    borderRadius: '4px',
    border: '1px solid #d1d5db',
    fontSize: '0.875rem',
  };

  const iconStyle = {
    position: 'absolute',
    left: '0.75rem',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#9ca3af',
  };

  const buttonStyle = {
    width: '100%',
    padding: '0.75rem',
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '0.875rem',
    cursor: 'pointer',
  };

  const errorStyle = {
    backgroundColor: '#fee2e2',
    color: '#dc2626',
    padding: '0.75rem',
    borderRadius: '4px',
    marginBottom: '1rem',
  };

  const footerStyle = {
    marginTop: '1.5rem',
    textAlign: 'center',
    fontSize: '0.875rem',
    color: '#6b7280',
  };

  const linkStyle = {
    color: '#3b82f6',
    textDecoration: 'none',
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <div style={headerStyle}>
          <h2 style={titleStyle}>Welcome Back</h2>
          <p style={subtitleStyle}>Please sign in to your account</p>
        </div>
        {error && <div style={errorStyle}>{error}</div>}
        <form onSubmit={handleSubmit} style={formStyle}>
          <div style={inputContainerStyle}>
            <span style={iconStyle}>📧</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              style={inputStyle}
            />
          </div>
          <div style={inputContainerStyle}>
            <span style={iconStyle}>🔒</span>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              style={inputStyle}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{...iconStyle, left: 'auto', right: '0.75rem', background: 'none', border: 'none', cursor: 'pointer'}}
            >
              {showPassword ? '👁️' : '👁️‍🗨️'}
            </button>
          </div>
          <button type="submit" style={buttonStyle}>
            Sign In
          </button>
        </form>
        <div style={footerStyle}>
          Don't have an account?{' '}
          <a href="/signup" style={linkStyle}>
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;