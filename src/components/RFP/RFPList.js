// src/components/RFP/RFPList.js
/*
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { fetchRFPs } from '../../api';

const RFPListContainer = styled.div`
  padding: 20px;
`;

const RFPItem = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px 0;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  margin: 10px 0;
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
`;

const RFPList = () => {
  const [rfps, setRfps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadRFPs = async () => {
      try {
        const response = await fetchRFPs();
        setRfps(response.data);
      } catch (err) {
        setError('Failed to load RFPs. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    loadRFPs();
  }, []);

  if (loading) return <div>Loading RFPs...</div>;
  if (error) return <div>{error}</div>;

  return (
    <RFPListContainer>
      <h2>Available RFPs</h2>
      {rfps.map((rfp) => (
        <RFPItem key={rfp.id}>
          <h3>{rfp.title}</h3>
          <p>{rfp.description}</p>
          <StyledLink to={`/rfps/${rfp.id}`}>View Details</StyledLink>
        </RFPItem>
      ))}
      <StyledLink to="/create-rfp">Create New RFP</StyledLink>
    </RFPListContainer>
  );
};

export default RFPList;*/


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchRFPs } from '../../api';

const RFPList = () => {
  const [rfps, setRfps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadRFPs = async () => {
      try {
        const response = await fetchRFPs();
        setRfps(response.data);
      } catch (err) {
        setError('Failed to load RFPs. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    loadRFPs();
  }, []);

  const containerStyle = {
    maxWidth: '800px',
    margin: 'auto',
    padding: '20px',
  };

  const rfpItemStyle = {
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    padding: '15px',
    marginBottom: '15px',
    backgroundColor: 'white',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
  };

  const linkStyle = {
    display: 'inline-block',
    margin: '10px 0',
    padding: '8px 16px',
    backgroundColor: '#3b82f6',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '4px',
    fontSize: '0.875rem',
  };

  if (loading) return <div>Loading RFPs...</div>;
  if (error) return <div style={{ color: 'red' }}>{error}</div>;

  return (
    <div style={containerStyle}>
      <h2 style={{ textAlign: 'center', color: '#1f2937' }}>Available RFPs</h2>
      {rfps.map((rfp) => (
        <div key={rfp.id} style={rfpItemStyle}>
          <h3 style={{ color: '#2563eb' }}>{rfp.title}</h3>
          <p>{rfp.description}</p>
          <Link to={`/rfps/${rfp.id}`} style={linkStyle}>View Details</Link>
        </div>
      ))}
      <Link to="/create-rfp" style={{ ...linkStyle, backgroundColor: '#10b981' }}>Create New RFP</Link>
    </div>
  );
};

export default RFPList;