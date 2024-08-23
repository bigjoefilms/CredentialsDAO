"use client"
import { useEffect, useState } from "react";

export function useRedirectUri() {
  const [redirectUri, setRedirectUri] = useState<string | undefined>();

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Ensure this runs only on the client
      setRedirectUri(`${window.location.origin}/redirect`);
    }
  }, []);

  return redirectUri;
}