// authService.js

const AUTH_TOKEN_KEY = 'authToken'; // Key for storing the token in localStorage

// Get the authentication token from localStorage
export const getAuthToken = () => {
  return localStorage.getItem(AUTH_TOKEN_KEY);
};

// Set the authentication token in localStorage
export const setAuthToken = (token) => {
  localStorage.setItem(AUTH_TOKEN_KEY, token);
};

// Remove the authentication token from localStorage
export const removeAuthToken = () => {
  localStorage.removeItem(AUTH_TOKEN_KEY);
};

// Check if the user is authenticated
export const isAuthenticated = () => {
  const token = getAuthToken();
  return !!token; // Return true if token exists, false otherwise
};
