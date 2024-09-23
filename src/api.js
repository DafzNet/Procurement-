/*// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Change to your backend URL

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

export const login = (credentials) => api.post('/auth/login', credentials);
export const register = (userData) => api.post('/auth/register', userData);
export const fetchRFPs = () => api.get('/rfps');
export const createRFP = (rfpData) => api.post('/rfps', rfpData);
export const submitBid = (bidData) => api.post('/bids', bidData);
export const onboardSupplier = (supplierData) => api.post('/suppliers/onboard', supplierData);
export const evaluateBids = (rfpId) => api.post(`/bids/evaluate/${rfpId}`);
export const getWinningBid = (rfpId) => api.get(`/bids/winning/${rfpId}`);

export default api;
*/



import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Change to your backend URL

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

export const login = (credentials) => api.post('/auth/login', credentials);
export const register = (userData) => api.post('/auth/register', userData);
export const fetchRFPs = () => api.get('/rfps');
export const createRFP = (rfpData) => api.post('/rfps', rfpData);
export const submitBid = (bidData) => api.post('/bids', bidData);
export const onboardSupplier = (supplierData) => api.post('/suppliers/onboard', supplierData);
export const evaluateBids = (rfpId) => api.post('/bids/evaluate', { rfpId });
export const getWinningBid = (rfpId) => api.get(`/bids/winning/${rfpId}`);

export default api;