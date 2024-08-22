"use client"
import React,{useEffect} from 'react';
import { useRouter } from 'next/navigation';
import LoginButton from './LoginButton';
import { useOCAuth,  } from '@opencampus/ocid-connect-js';

interface AuthStateDisplayProps {
  authState: any;
  ocAuth: any;
}

const AuthStateDisplay: React.FC<AuthStateDisplayProps> = ({ authState, ocAuth }) => {
    useEffect(() => {
      console.log(authState);
    }, [authState]); // Logs whenever authState changes
  
    if (authState.error) {
      return <div>Error: {authState.error.message}</div>;
    }
  
    if (authState.isLoading) {
      return <div className="spinner-overlay">
      <div className="spinner"></div>
    </div>
    }
  
    return authState.isAuthenticated ? (
        <p>You are logged in! {JSON.stringify(ocAuth.getAuthInfo())}</p>
    ) : (
      <LoginButton />
    );
  };

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onOption1: () => void;
  onOption2: () => void;
 
  
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onOption1, onOption2   }) => {
  if (!isOpen) return null;

  const { ocAuth } = useOCAuth();

  const handleLogin = async () => {
    try {
      await ocAuth.signInWithRedirect({ state: 'opencampus' });
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-semibold mb-4">Choose an Option</h2>
        <div className="flex justify-between gap-4">
          <button
            className="flex-1 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
            onClick={handleLogin}
          >
          
            Issue Certificate
          </button>
          <button
            className="flex-1 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition"
            onClick={onOption2}
          >
            Credential wallet
          </button>
        </div>
        <button
          className="mt-4 text-gray-500 hover:text-gray-700 transition"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
