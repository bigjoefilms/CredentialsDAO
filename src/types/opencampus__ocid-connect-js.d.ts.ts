
declare module '@opencampus/ocid-connect-js' {
  import { ReactNode } from 'react';

  export function useOCAuth(): any;
  export const LoginCallBack: any;

  export interface OCConnectProps {
    children?: ReactNode; // Add this if `OCConnect` should accept children
    opts: {
      redirectUri: string;
    };
    sandboxMode: boolean;
  }

  export const OCConnect: React.ComponentType<OCConnectProps>;
}