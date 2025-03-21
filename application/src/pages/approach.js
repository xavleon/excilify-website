import React, { useState } from "react";
import Footer from "../components/footer";
import ApproachSection from "../components/approach";
import { Navbar } from "../components/navbar";
import { Sidebar } from "../components/sidebar";

const ApproachPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <ApproachSection />
      <Footer />
    </>
  );
};

export default ApproachPage; 