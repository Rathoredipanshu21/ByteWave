import React, { useState, useEffect } from 'react';
import './WorkTechnology.css';
import python from '../Assets/bike.jpg'

const WorkTechnology = () => {
  const images = [
    'https://img.bytewave.in/icon/dotnet.png',
    'https://img.bytewave.in/icon/figma.png',
    'https://img.bytewave.in/icon/html_css.png',
    'https://img.bytewave.in/icon/mango_db.png',
    'https://img.bytewave.in/icon/MySQL.png',
    'https://img.bytewave.in/icon/node.png',
    'https://images.prismic.io/kurmishadi/efee81f7-5ece-4852-a89b-72e6720adfa4_MySQL.png?',
    'https://img.bytewave.in/icon/react.png',

    'https://img.bytewave.in/icon/python.png',

    'https://img.bytewave.in/icon/wordpress.png',
    'https://img.bytewave.in/icon/angular.png',

    
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className='background-worktechno'> 
      <div className='techno-text-group' >
        <h1 style={{textAlign:'center', color:'#fff'}}>We Work On Technologies</h1>
        <p style={{textAlign:'center'}}>Cultivating excellence in every aspect of our service, we are dedicated to delivering unparalleled satisfaction to our valued customers.</p>
      </div>
     
      <div className="slider">
        <div className='slider-track'>
          {images.map((imageUrl, index) => (
            <div className='slid' key={index}>
              <img className='imag'
                src={images[(index + currentImageIndex) % images.length]}
               
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkTechnology;
