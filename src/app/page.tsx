"use client";

import { useState } from "react";
import { useOCAuth } from "@opencampus/ocid-connect-js";
import Features from "./components/Features";
import GetApp from "./components/GetStarted";
import Hero from "./components/Hero";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  const { authState, ocAuth } = useOCAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleOption1 = () => {
    console.log("Option 1 selected");
    handleCloseModal();
  };

  const handleOption2 = () => {
    console.log("Option 2 selected");
    handleCloseModal();
  };

  return (
    <>
    <Navbar isOpen={handleOpenModal} />
      <Hero
       
        
        isOpen={handleOpenModal}
       
      />
      <Features />
      <GetApp />

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onOption1={handleOption1}
        onOption2={handleOption2}
      />
      <Footer />
    </>
  );
}
