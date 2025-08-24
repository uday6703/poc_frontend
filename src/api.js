import axios from 'axios';

const API_BASE = 'http://localhost:5000';

export const fetchNotifications = async (userId) => {
  const res = await axios.get(`${API_BASE}/notifications/${userId}`);
  return res.data;
};

export const createEvent = async (event) => {
  const res = await axios.post(`${API_BASE}/events`, event);
  return res.data;
};
