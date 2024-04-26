import React, { useState, useEffect } from 'react';
import './Serve.css';

const Serve = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const card = [
    'https://images.prismic.io/kurmishadi/a0330572-d8d8-4d9a-9ca7-8d0b4443bb9d_medical.jpg?auto=compress,format=webp,height=283,width=283',
    'https://images.prismic.io/kurmishadi/ac6483a8-b6f8-452a-befe-19f5862ada41_payments.jpg?auto=compress,format=webp,height=283,width=283',
    'https://images.prismic.io/kurmishadi/ad6219d6-62f4-4989-8139-1eb9e92924db_e-commerce.jpg?auto=compress,format=webp,height=283,width=283',
    'https://images.prismic.io/kurmishadi/c091bb32-16bb-4acb-b47a-e580731f216f_grocery.jpg?auto=compress,format=webp,height=283,width=283',
    'https://images.prismic.io/kurmishadi/a437696a-6db0-4f35-82e5-ecb76e7d60df_educations.jpg?auto=compress,format=webp,height=283,width=283',
    'https://images.prismic.io/kurmishadi/a0330572-d8d8-4d9a-9ca7-8d0b4443bb9d_medical.jpg?auto=compress,format=webp,height=283,width=283',
    'https://images.prismic.io/kurmishadi/ac6483a8-b6f8-452a-befe-19f5862ada41_payments.jpg?auto=compress,format=webp,height=283,width=283',
    'https://images.prismic.io/kurmishadi/ad6219d6-62f4-4989-8139-1eb9e92924db_e-commerce.jpg?auto=compress,format=webp,height=283,width=283',
    'https://images.prismic.io/kurmishadi/c091bb32-16bb-4acb-b47a-e580731f216f_grocery.jpg?auto=compress,format=webp,height=283,width=283',
    'https://images.prismic.io/kurmishadi/a437696a-6db0-4f35-82e5-ecb76e7d60df_educations.jpg?auto=compress,format=webp,height=283,width=283'
  ];

  useEffect(() => {
    const Serve = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === card.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000);

    return () => clearInterval(Serve);
  }, [card.length]);

  return (
    <div className='imgagediv'>
      <div className='head' style={{textAlign:'center'}}>
        <h1>Industries We Serve</h1>
        <p>We think big and have hands in all leading technology for Website design & Development.</p>
      </div>
      <div className="image-container">
        <div className='image-slider'>
          {card.map((imageUrl, index) => (
            <img
              className='image'
              key={index}
              src={card[(index + currentImageIndex) % card.length]}
              alt={`Slide ${index}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Serve;
