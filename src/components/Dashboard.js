// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { fetchRFPs } from '../api';
import { useAuth } from '../context/AuthContext';

const DashboardContainer = styled.div`
  padding: 20px;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  margin: 10px;
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
`;

const Dashboard = () => {
  const [recentRFPs, setRecentRFPs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    const loadRecentRFPs = async () => {
      try {
        const response = await fetchRFPs();
        setRecentRFPs(response.data.slice(0, 5)); // Get the 5 most recent RFPs
      } catch (err) {
        setError('Failed to load recent RFPs. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    loadRecentRFPs();
  }, []);

  if (loading) return <div>Loading dashboard...</div>;
  if (error) return <div>{error}</div>;

  return (
    <DashboardContainer>
      <h2>Welcome to the Procurement Dashboard, {user.name}</h2>
      <StyledLink to="/create-rfp">Create New RFP</StyledLink>
      <StyledLink to="/rfps">View All RFPs</StyledLink>
      <h3>Recent RFPs</h3>
      {recentRFPs.map(rfp => (
        <div key={rfp.id}>
          <h4>{rfp.title}</h4>
          <p>{rfp.description.substring(0, 100)}...</p>
          <StyledLink to={`/rfps/${rfp.id}`}>View Details</StyledLink>
        </div>
      ))}
    </DashboardContainer>
  );
};

export default Dashboard;