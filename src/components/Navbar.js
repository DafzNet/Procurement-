// src/components/Navbar.js
/*
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
    background-color: #333;
    padding: 1rem;
`;

const NavList = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
`;

const NavItem = styled.li`
    margin: 0 1rem;
`;

const NavLink = styled(Link)`
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: bold;
    padding: 0.5rem;
    border-radius: 5px;

    &:hover {
        background-color: #555;
    }
`;

const Navbar = () => {
    return (
        <Nav>
            <NavList>
                <NavItem>
                    <NavLink to="/">Dashboard</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/login">Login</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/register">Register</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/rfps">View RFPs</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/create-rfp">Create RFP</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/submit-bid">Submit Bid</NavLink>
                </NavItem>
            </NavList>
        </Nav>
    );
};

export default Navbar;
*/

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../context/AuthContext';

const Nav = styled.nav`
  background-color: #333;
  padding: 1rem;
`;

const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0 1rem;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 0.5rem;
  border-radius: 5px;
  &:hover {
    background-color: #555;
  }
`;

const LogoutButton = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background-color: #c82333;
  }
`;

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Nav>
      <NavList>
        <div>
          <NavItem>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/rfps">View RFPs</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/create-rfp">Create RFP</NavLink>
          </NavItem>
        </div>
        <div>
          {user ? (
            <>
              <span style={{ color: 'white', marginRight: '1rem' }}>Welcome, {user.name}</span>
              <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
            </>
          ) : (
            <NavItem>
              <NavLink to="/login">Login</NavLink>
            </NavItem>
          )}
        </div>
      </NavList>
    </Nav>
  );
};

export default Navbar;