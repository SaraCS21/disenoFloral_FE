import { useState, useEffect } from "react";
import {
  login as loginService,
  logout as logoutService,
  getAuthToken,
} from "../services/authService";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = getAuthToken();
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email, password) => {
    try {
      const data = await loginService(email, password);
      setIsAuthenticated(true);
      setUser(data.user);
    } catch (error) {
      console.error("Error en login:", error);
      setIsAuthenticated(false);
    }
  };

  const logout = () => {
    logoutService();
    setIsAuthenticated(false);
    setUser(null);
  };

  return { user, isAuthenticated, login, logout };
};

export default useAuth;
