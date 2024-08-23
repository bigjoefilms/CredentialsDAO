'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/'); // Redirect to login page if not authenticated
    }
  }, [isAuthenticated, loading, router]);

  if (loading) {
    
    router.push('/');
    
    
      // Show a loading spinner or placeholder while checking auth status
  }

  return <>{children}</>;
};

export default ProtectedRoute;