import React, { useState } from "react";
import TitleHiddenSection from "../components/TitleHiddenSection";
import TitleSection from "../components/TitleSection";
import InfoSection from "../components/InfoSection";
import {
  home0bjOne,
  home0bjTwo,
  home0bjThree,
} from "../components/InfoSection/Data";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <TitleHiddenSection />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <TitleSection />
      <InfoSection {...home0bjOne} />
      <InfoSection {...home0bjTwo} />
      <Services />
      <InfoSection {...home0bjThree} />
      <Footer />
    </>
  );
};

export default Home;
