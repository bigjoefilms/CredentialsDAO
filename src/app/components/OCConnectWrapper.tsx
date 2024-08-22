'use client'
import { ReactNode } from 'react';
import { OCConnect, OCConnectProps } from '@opencampus/ocid-connect-js';

interface OCConnectWrapper{
  children : ReactNode ;
  opts: {
    redirectUri: string; 
       
  };
  sandboxMode: boolean;
}


export default function OCConnectWrapper({ children, opts, sandboxMode } :OCConnectWrapper) {
  return (
    <OCConnect opts={opts} sandboxMode={sandboxMode}>
      {children}
    </OCConnect>
  );
}