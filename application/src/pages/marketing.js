import React, { useState } from "react";
import Footer from "../components/footer";
import MarketingSection from "../components/marketing";
import { Navbar } from "../components/navbar";
import { Sidebar } from "../components/sidebar";

const MarketingPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <MarketingSection />
      <Footer />
    </>
  );
};

export default MarketingPage; 