import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Replace with your backend API URL

export const authService = {
  login: async (email: string, password: string) => {
    const response = await axios.post(`${API_URL}/auth/login`, { email, password });
    return response.data;
  },
  register: async (email: string, password: string) => {
    const response = await axios.post(`${API_URL}/auth/register`, { email, password });
    return response.data;
  },
};