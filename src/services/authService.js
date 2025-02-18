// services/authService.js
import axios from "axios";

const API_URL = "http://localhost:8080/api/auth";

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    const { token } = response.data;

    if (token) {
      localStorage.setItem("token", token);
    }

    return response.data;
  } catch (error) {
    console.error("Error en login:", error);
    throw error;
  }
};

export const logout = () => {
  localStorage.removeItem("token"); // Eliminar token de LocalStorage
};

export const getAuthToken = () => {
  return localStorage.getItem("token");
};

export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};
