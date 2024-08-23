'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useOCAuth } from '@opencampus/ocid-connect-js';

export default function LoginButton() {
  const { ocAuth, authState } = useOCAuth();
  const router = useRouter();

  useEffect(() => {
    if (authState.isAuthenticated) {
      // If already logged in, redirect to /stepone
      router.push('/stepone');
    }
  }, [authState.isAuthenticated, router]);

  const handleLogin = async () => {
    try {
      await ocAuth.signInWithRedirect({ state: 'opencampus' });
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  // If already logged in, prevent the button from being displayed
  if (authState.isAuthenticated) {
    return null; // or return a different UI indicating logged-in status
  }

  return <button onClick={handleLogin}>Issue Certificate</button>;
}