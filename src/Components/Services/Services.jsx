import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Services.css";
import Navbar from "../Navbar/Navbar";

const Services = () => {
  const serviceRef = useRef(null);

  return (
    <div className="service" ref={serviceRef}>
    
      <p>SERVICES</p>
      <span style={{marginLeft:'45px',color:'#fff'}}>Digital Transformation Services
</span>
      <hr />
      <div className="service-main">
        <Link to="/ServiceDetails" className="service-link">
          <div className="service-box">
            <img src="https://img.bytewave.in/icon/world-wide-web.png" alt="" />
            <span>Website</span>
          </div>
        </Link>
        <Link to="/ApplicationProjects" className="service-link">
          <div className="service-box">
            <img src="https://img.bytewave.in/icon/mobile-app.png" alt="" />
            <span>Application</span>
          </div>
        </Link>
        <Link to="/Software" className="service-link">
          <div className="service-box">
            <img src="https://img.bytewave.in/icon/coding.png" alt="" />
            <span>Software</span>
          </div>
        </Link>
        <Link to="/DigitalMarketing" className="service-link">
          <div className="service-box">
            <img src="https://img.bytewave.in/icon/bullhorn.png" alt="" />
            <span>Digital Marketing</span>
          </div>
        </Link>
        <Link to="/GraphicDesign" className="service-link">
          <div className="service-box">
            <img src="https://img.bytewave.in/icon/curve.png" alt="" />
            <span>Graphic Design</span>
          </div>
        </Link>
        <Link to="/Internship" className="service-link">
          <div className="service-box">
            <img src="https://img.bytewave.in/icon/internship.png" alt="" />
            <span>Internship</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Services;
