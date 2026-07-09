import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "/",
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach token to every request if available
api.interceptors.request.use(
  (config) => {
    // Retrieve the token from local storage (or your state manager)
    const token = localStorage.getItem('token');
    
    // If the token exists, add it to the Authorization header.
    // Backend returns Django TokenAuthentication tokens, use the `Token` prefix.
    if (token) {
      config.headers.Authorization = `Token ${token}`;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
