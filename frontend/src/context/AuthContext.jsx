import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored authentication on app load
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");

    if (token && userData) {
      setUser(JSON.parse(userData));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      // Mock API call - replace with actual backend
      const response = await mockLoginAPI(email, password);

      if (response.success) {
        const userData = response.user;
        setUser(userData);
        localStorage.setItem("token", response.token);
        localStorage.setItem("user", JSON.stringify(userData));
        return { success: true };
      }
      return { success: false, error: response.error };
    } catch (error) {
      return { success: false, error: "Login failed" };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  const value = {
    user,
    login,
    logout,
    loading,
    isAuthenticated: !!user,
    isResident: user?.role === "resident",
    isSecurityOfficer: user?.role === "security_officer",
    isAdmin: user?.role === "admin",
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Mock API function - replace with actual backend
const mockLoginAPI = (email, password) => {
  const users = {
    "resident@community.com": {
      id: 1,
      email: "resident@community.com",
      name: "John Resident",
      role: "resident",
      community: "Sunrise Valley",
    },
    "security@community.com": {
      id: 2,
      email: "security@community.com",
      name: "Mike Security",
      role: "security_officer",
      community: "Sunrise Valley",
    },
    "admin@community.com": {
      id: 3,
      email: "admin@community.com",
      name: "Admin User",
      role: "admin",
      community: "Sunrise Valley",
    },
  };

  return new Promise((resolve) => {
    setTimeout(() => {
      const user = users[email];
      if (user && password === "password") {
        resolve({
          success: true,
          user,
          token: "mock-jwt-token",
        });
      } else {
        resolve({
          success: false,
          error: "Invalid credentials",
        });
      }
    }, 1000);
  });
};
