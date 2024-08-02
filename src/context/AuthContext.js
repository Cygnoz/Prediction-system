import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Retrieve the authentication status from sessionStorage
    const storedAuth = sessionStorage.getItem('isAuthenticated');
    return storedAuth === 'true';
  });

  useEffect(() => {
    // Save the authentication status to sessionStorage whenever it changes
    sessionStorage.setItem('isAuthenticated', isAuthenticated);
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
