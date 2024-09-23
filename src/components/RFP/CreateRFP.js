// src/components/RFP/Cre
/*
import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { createRFP } from '../../api';

const CreateRFPContainer = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  margin-bottom: 10px;
  padding: 5px;
`;

const StyledTextarea = styled.textarea`
  margin-bottom: 10px;
  padding: 5px;
`;

const StyledButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
`;

const CreateRFP = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await createRFP({ title, description });
      navigate('/rfps');
    } catch (err) {
      setError('Failed to create RFP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Creating RFP...</div>;

  return (
    <CreateRFPContainer>
      <h2>Create RFP</h2>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="RFP Title"
          required
        />
        <StyledTextarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="RFP Description"
          required
        />
        <StyledButton type="submit">Create RFP</StyledButton>
      </StyledForm>
    </CreateRFPContainer>
  );
};

export default CreateRFP;*/


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createRFP } from '../../api';

const CreateRFP = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await createRFP({ title, description });
      navigate('/rfps');
    } catch (err) {
      setError('Failed to create RFP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const containerStyle = {
    maxWidth: '600px',
    margin: 'auto',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'white',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    borderRadius: '4px',
    border: '1px solid #d1d5db',
    fontSize: '0.875rem',
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

  if (loading) return <div>Creating RFP...</div>;

  return (
    <div style={containerStyle}>
      <h2 style={{ textAlign: 'center', color: '#1f2937' }}>Create RFP</h2>
      {error && <div style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="RFP Title"
          required
          style={inputStyle}
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="RFP Description"
          required
          style={{ ...inputStyle, minHeight: '100px' }}
        />
        <button type="submit" style={buttonStyle}>
          Create RFP
        </button>
      </form>
    </div>
  );
};

export default CreateRFP;