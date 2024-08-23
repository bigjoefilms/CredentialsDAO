'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useOCAuth } from '@opencampus/ocid-connect-js';

interface AuthContextType {
  isAuthenticated: boolean;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({ isAuthenticated: false, loading: true });

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { authState } = useOCAuth();
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (authState.isAuthenticated) {
      setIsAuthenticated(true);
      setLoading(false);
    } else if (authState.error) {
      setIsAuthenticated(false);
      setLoading(false);
    }
  }, [authState]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
