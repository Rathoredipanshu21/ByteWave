import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
    <Navbar/>
    <div className='page'>
        <div className='Reach-us'>
            <div className='head'>
            REACH US
            <hr/>
        </div>
      
         <p style={{textAlign:'center'}}>
            Thank you for your interest in contacting us. We value your feedback, inquiries, and suggestions. Please fill out the form below, and we'll get back to you as soon as possible.
          </p>
          
          <div className='card'>
      <div className="contact-card">
        <div className="right-card">
          <h3 className="contact-heading">
            Contact Us
           <hr />
          </h3>
          <div className="get-in-touch">Get in touch</div>
         
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="name">Your Name</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="What's your name?"
                className="form-input"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">Your Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="What's your email address?"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="message">Your Message</label>
              <textarea
                rows="4"
                name="message"
                id="message"
                required
                placeholder="What you want to say?"
                className="form-textarea"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className='button'>
              <button type="submit" className="form-submit">Send</button>
            </div>

          </form>
       
        </div>
      </div>
      </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Contact;