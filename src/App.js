// src/App.js
/*
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Dashboard from './components/Dashboard';
import RFPList from './components/RFP/RFPList';
import CreateRFP from './components/RFP/CreateRFP';
import SubmitBid from './components/Bid/SubmitBid';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/rfps" element={<PrivateRoute><RFPList /></PrivateRoute>} />
            <Route path="/create-rfp" element={<PrivateRoute><CreateRFP /></PrivateRoute>} />
            <Route path="/rfps/:rfpId/submit-bid" element={<PrivateRoute><SubmitBid /></PrivateRoute>} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;*/

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Dashboard from './components/Dashboard';
import RFPList from './components/RFP/RFPList';
import CreateRFP from './components/RFP/CreateRFP';
import SubmitBid from './components/Bid/SubmitBid';
import { useAuth } from './context/AuthContext';

const App = () => {
  const { user } = useAuth();

  return (
    <AuthProvider>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/login" element={user ? <Navigate to="/dashboard" /> : <Login />} />
            <Route path="/register" element={user ? <Navigate to="/dashboard" /> : <Register />} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/rfps" element={<PrivateRoute><RFPList /></PrivateRoute>} />
            <Route path="/create-rfp" element={<PrivateRoute><CreateRFP /></PrivateRoute>} />
            <Route path="/rfps/:rfpId/submit-bid" element={<PrivateRoute><SubmitBid /></PrivateRoute>} />
            <Route path="/" element={<Navigate to="/dashboard" />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;