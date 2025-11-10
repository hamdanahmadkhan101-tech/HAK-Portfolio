import axios from 'axios';

const API_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const portfolioAPI = {
  // Profile
  getProfile: async () => {
    const response = await api.get('/api/profile');
    return response.data;
  },

  // Projects
  getProjects: async (featured = null) => {
    const params = featured !== null ? { featured } : {};
    const response = await api.get('/api/projects', { params });
    return response.data;
  },

  getProjectBySlug: async (slug) => {
    const response = await api.get(`/api/projects/${slug}`);
    return response.data;
  },

  // Skills
  getSkills: async () => {
    const response = await api.get('/api/skills');
    return response.data;
  },

  // Stats
  getStats: async () => {
    const response = await api.get('/api/stats');
    return response.data;
  },

  // Experience
  getExperience: async () => {
    const response = await api.get('/api/experience');
    return response.data;
  },

  // Contact
  submitContact: async (data) => {
    const response = await api.post('/api/contact', data);
    return response.data;
  },
};

export default portfolioAPI;

