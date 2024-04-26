import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';
import movingVdo from '../Assets/movingVdo.mp4';
import Video from './Video';


const Footer = () => {
    return (
      <> 
      <footer className="footer2">
      <hr />       
                
            <div className="footer__container2">



                <div className="footer__section2">

             

                </div>

                <div className="footer__section2">
                    <h3>Quick Links</h3>
                    <hr />
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/Contact">Contact us</a></li>
                        <li><a href="/Projects">Projects</a></li>
                       
                    </ul>
                </div>
                
                <div className="footer__section2">
                    <h3>Reach Us</h3>
                    <hr />
                    <p>SBI COLONY , STEEL GATE  <br />Dhanbad, Jharkhand  826005</p>
                    <p>Email : contact@bytewave.in</p>
                    <p>Phone : +91-840501041</p>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                        <a href="https://www.twitter.com/example" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                        <a href="https://www.instagram.com/example" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                  </div>
                </div>


           
            </div>
        </footer>

        {/* <Video/> */}
       
        <div className="footer__bottom2">
                <p>&copy; 2024 BYTE WAVE. All rights reserved.</p>
                <p style={{fontSize:'.6rem'}}>Designed and Developed by @ Byte wave</p>
            </div>
        </>

    );
};

export default Footer;
