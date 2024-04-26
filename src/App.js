import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Services from "./Components/Services/Services";
import ServiceDetail from "./Components/Services/ServiceDetail";
import Main from "./main";
import ApplicationDetail from "./Components/Services/ApplicationDetail";
import MobileAppDetail from "./Components/Services/ApplicationDetail"; 
import Projects from "./Components/Projects/Projects";
import ApplicationProject from "./Components/Services/ApplicationProjects";
import WhatsAppButton from "./Components/WhatsAppButton";
import Contact from "./Components/Contact/Contact";
import NavService from "./Components/Services/NavService";
import DigitalMarketing from "./Components/Home/DigitalMarketing";
import Internship from "./Components/Home/Internship";
import Software from "./Components/Home/Software";
import GraphicDesignPage from "./Components/Services/GraphicDesign";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <>

    
    <Router>
      <ScrollToTop />
      <WhatsAppButton/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/serviceDetails" element={<ServiceDetail/>} />
        <Route path="/ApplicationDetail" element={<ApplicationDetail/>} />
        <Route path="/ApplicationProjects" element={<ApplicationProject/>} />
       <Route path="/DigitalMarketing" element={<DigitalMarketing/>} />
       <Route path="/GraphicDesign" element={<GraphicDesignPage/>} />
       <Route path="/Software" element={<Software/>} />
       <Route path="/Internship" element={<Internship/>} />
        <Route path="/NavService" element={<NavService/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/service/:id" element={<ServiceDetail />} />
        <Route path="/mobileappservice/:id" element={<MobileAppDetail />} /> 
        <Route path="/services"  element={<Services />} /> 
      </Routes>
    </Router>
    </>
  );
};

export default App;
