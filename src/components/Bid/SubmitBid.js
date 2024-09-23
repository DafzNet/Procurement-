// src/components/Bid/SubmitBid.js

/*
import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { submitBid } from '../../api';

const SubmitBidContainer = styled.div`
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

const StyledButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
`;

const SubmitBid = () => {
  const [amount, setAmount] = useState('');
  const [documents, setDocuments] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { rfpId } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    const formData = new FormData();
    formData.append('rfpId', rfpId);
    formData.append('amount', amount);
    if (documents) {
      for (let i = 0; i < documents.length; i++) {
        formData.append('documents', documents[i]);
      }
    }

    try {
      await submitBid(formData);
      navigate(`/rfps/${rfpId}`);
    } catch (err) {
      setError('Failed to submit bid. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Submitting bid...</div>;

  return (
    <SubmitBidContainer>
      <h2>Submit Bid for RFP #{rfpId}</h2>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Bid Amount"
          required
        />
        <StyledInput
          type="file"
          multiple
          onChange={(e) => setDocuments(e.target.files)}
        />
        <StyledButton type="submit">Submit Bid</StyledButton>
      </StyledForm>
    </SubmitBidContainer>
  );
};

export default SubmitBid;*/


import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { submitBid } from '../../api';

const SubmitBid = () => {
  const [amount, setAmount] = useState('');
  const [documents, setDocuments] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { rfpId } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await submitBid({
        rfpId,
        supplierId: 1, // This should be dynamically set based on the logged-in user
        amount: parseFloat(amount),
        documents
      });
      navigate(`/rfps/${rfpId}`);
    } catch (err) {
      setError('Failed to submit bid. Please try again.');
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
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '0.875rem',
    cursor: 'pointer',
  };

  if (loading) return <div>Submitting bid...</div>;

  return (
    <div style={containerStyle}>
      <h2 style={{ textAlign: 'center', color: '#1f2937' }}>Submit Bid for RFP #{rfpId}</h2>
      {error && <div style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Bid Amount"
          required
          style={inputStyle}
        />
        <input
          type="text"
          value={documents}
          onChange={(e) => setDocuments(e.target.value)}
          placeholder="Document Links (comma-separated)"
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>Submit Bid</button>
      </form>
    </div>
  );
};

export default SubmitBid;