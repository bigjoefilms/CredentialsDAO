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

  // Show a loading spinner or placeholder while checking auth status
  if (loading) {
    return
    <div>
      <p>Go back and login</p>
     <div className="spinner-overlay">
    <div className="spinner"> </div>
  </div>
  </div>;
  }

  // Only render children if authenticated
  if (isAuthenticated) {
    return <>{children}</>;
  }

  // Return null or a placeholder while redirecting (if not authenticated)
  return null;
};



export default ProtectedRoute;