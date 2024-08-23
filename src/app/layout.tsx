import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import OCConnectWrapper from "./components/OCConnectWrapper";
import { AuthProvider } from "./context/AuthContext";
import { useRedirectUri } from "../hooks/useRedirectUri"; // Import the custom hook

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
  // Use the custom hook to get the redirectUri
  const redirectUri = useRedirectUri();

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
