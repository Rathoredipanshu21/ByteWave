import React from 'react';
import './NavService.css'; 
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const NavService = () => {
  return (
    <>
    <Navbar/>
    <div className="services-container">
      <h2 className="services-title">Our Services</h2>
      <div className="services-grid">
        <div className="service-item">
          <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29kaW5nfGVufDB8fDB8fHww" alt="Website Development" />
          <h3>Website Development</h3>
          <p>
            Our team specializes in creating dynamic and responsive websites tailored to meet your specific business needs. Whether you require a simple landing page or a complex e-commerce platform, we've got you covered. Our websites are designed to enhance user experience and drive engagement.
          </p>
          <button onClick={() => window.location.href = '/ServiceDetails'}>Learn More</button>
        </div>
        <div className="service-item">
          <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBwbGljYXRpb258ZW58MHx8MHx8fDA%3D" alt="Application Development" />
          <h3>Application Development</h3>
          <p>
            We excel in developing custom applications across various platforms, including iOS, Android, and web-based applications. From conceptualization to deployment, we ensure that your application is user-friendly, efficient, and scalable.
          </p>
          <button onClick={() => window.location.href = '/ApplicationProjects'}>Learn More</button>
        </div>
        <div className="service-item">
          <img src="https://images.unsplash.com/photo-1573495627361-d9b87960b12d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c29mdHdhcmUlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHx8MA%3D%3D" alt="Software Development" />
          <h3>Software Development</h3>
          <p>
            Our software development services encompass a wide range of solutions, including enterprise software, CRM systems, and custom software applications. We leverage the latest technologies to deliver robust and innovative software solutions that streamline your business processes.
          </p>
          <button onClick={() => window.location.href = '/Software'}>Learn More</button>
        </div>
        <div className="service-item">
          <img src="https://plus.unsplash.com/premium_photo-1683865775610-26fcc118a539?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGRpZ2l0YWwlMjBtYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D" alt="Digital Marketing" />
          <h3>Digital Marketing</h3>
          <p>
            In today's digital age, effective marketing is essential for business success. Our digital marketing services include search engine optimization (SEO), social media marketing (SMM), pay-per-click (PPC) advertising, email marketing, and content marketing. We help businesses enhance their online presence, attract more leads, and boost conversions.
          </p>
          <button onClick={() => window.location.href = '/DigitalMarketing'}>Learn More</button>
        </div>
        <div className="service-item">
          <img src="https://images.unsplash.com/photo-1525972292986-69295aebf4cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGdyYXBoaWMlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D" alt="Graphics Design" />
          <h3>Graphics Design</h3>
          <p>
            Our talented team of designers specializes in creating visually stunning graphics that captivate and engage your audience. From logo design and branding to promotional materials and website graphics, we ensure that your brand stands out from the crowd.
          </p>
          <button onClick={() => window.location.href = '/GraphicDesign'}>Learn More</button>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default NavService ;
