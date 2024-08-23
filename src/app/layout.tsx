
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import OCConnectWrapper from "./components/OCConnectWrapper";
import { AuthProvider } from "./context/AuthContext";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CredentialsDAO",
  description: "Create, Issue, View, and Verify Certificates on the Blockchain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // State to hold the redirectUri
  const [redirectUri, setRedirectUri] = useState<string | undefined>();

  useEffect(() => {
    // Set the redirectUri based on the current location
    setRedirectUri(`${window.location.origin}/redirect`);
  }, []);

  return (
    <html lang="en">
      {redirectUri ? ( // Only render OCConnectWrapper when redirectUri is set
        <OCConnectWrapper opts={{ redirectUri }} sandboxMode={true}>
          <AuthProvider>
            <body className={inter.className}>
              <main className="relative overflow-hidden">{children}</main>
            </body>
          </AuthProvider>
        </OCConnectWrapper>
      ) : null}
    </html>
  );
}
