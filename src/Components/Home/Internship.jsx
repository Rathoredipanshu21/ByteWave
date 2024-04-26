// Internship.js

import React from 'react';
import './Internship.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Internship = () => {
  return (

    <>
    <Navbar/>
    <div className="internship-container">
      <h1>Join Our Internship Program</h1>
      <div className="internship-details">
        <p>
          Are you a talented and ambitious student looking to gain hands-on experience in the exciting world of digital marketing? Our internship program offers a unique opportunity to learn from industry professionals, work on real-world projects, and kickstart your career in marketing.
        </p>
        <img src="https://images.unsplash.com/photo-1530099486328-e021101a494a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGFsZW50ZWQlMjBzdHVkZW50fGVufDB8fDB8fHww" alt="Internship Program" />
        <p>
          During the internship, you will have the chance to:
        </p>
        <ul>
          <li>Gain practical experience in various aspects of digital marketing, including SEO, social media, content creation, and more.</li>
          <li>Collaborate with our team on live projects, contributing your ideas and skills to drive results.</li>
          <li>Receive mentorship and guidance from experienced professionals who are passionate about helping you succeed.</li>
          <li>Build your portfolio and enhance your resume with valuable hands-on experience in a dynamic and fast-paced environment.</li>
        </ul>
        <img src="https://images.unsplash.com/photo-1598981457915-aea220950616?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRhbGVudGVkJTIwc3R1ZGVudHxlbnwwfHwwfHx8MA%3D%3D" alt="Internship Benefits" />
        <p>
          At the end of the internship, exceptional candidates may be offered a full-time position in our company, based on performance and business needs.
        </p>
        <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHRhbGVudGVkJTIwc3R1ZGVudHxlbnwwfHwwfHx8MA%3D%3D" alt="Job Opportunity" />
        <p>
          To apply for our internship program, please send your resume and a brief cover letter highlighting your skills, interests, and why you're passionate about pursuing a career in digital marketing to internship@yourcompany.com.
        </p>
        <p>
          We look forward to welcoming talented individuals who are eager to learn, grow, and make a difference in the world of digital marketing!
        </p>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Internship;
