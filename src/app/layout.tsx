import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import OCConnectWrapper from "./components/OCConnectWrapper";

const inter = Inter({ subsets: ["latin"] });

const opts = {
  redirectUri: 'http://localhost:3000/redirect', // Adjust this URL
};



export const metadata: Metadata = {
  title: "CredentialsDAO",
  description: "Create, Issue, View, and Verify Certificates on the Blockchain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <OCConnectWrapper opts={opts} sandboxMode={true}>

      
      <body className={inter.className}>
        
        <main className="relative overflow-hidden">{children}</main>
        
      </body>
      </OCConnectWrapper>
    </html>
  );
}
