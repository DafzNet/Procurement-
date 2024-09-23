
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../../api';

const Register = () => {
  /*const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await register({ name, email, password });
      // eslint-disable-next-line
      const { token, user } = response.data;
      localStorage.setItem('token', token);
      // Assuming you have a login function in your AuthContext
      // login(user);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };*/

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await register({ name, email, password });
      const { userId } = response.data;
      setUser({ id: userId, name, email });
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(to right, #d1fae5, #dbeafe)',
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
    backgroundColor: '#10b981',
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
    color: '#10b981',
    textDecoration: 'none',
  };

  const loadingStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  };

  if (loading) {
    return (
      <div style={loadingStyle}>
        <div style={{
          border: '4px solid #f3f3f3',
          borderTop: '4px solid #10b981',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          animation: 'spin 1s linear infinite',
        }}></div>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <div style={headerStyle}>
          <h2 style={titleStyle}>Create an Account</h2>
          <p style={subtitleStyle}>Join us and start your journey</p>
        </div>
        {error && <div style={errorStyle}>{error}</div>}
        <form onSubmit={handleSubmit} style={formStyle}>
          <div style={inputContainerStyle}>
            <span style={iconStyle}>👤</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              required
              style={inputStyle}
            />
          </div>
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
            Create Account
          </button>
        </form>
        <div style={footerStyle}>
          Already have an account?{' '}
          <a href="/login" style={linkStyle}>
            Sign in
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
