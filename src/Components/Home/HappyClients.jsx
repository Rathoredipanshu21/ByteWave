import React, { useState, useEffect } from "react";
import "./HappyClients.css";

const CardSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const clients = [
    {
      name: "Client 1",
      image:
        "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwbWFufGVufDB8fDB8fHww",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      rating: 4.5,
    },
    {
      name: "Client 2",
      image:
        "https://images.unsplash.com/photo-1620324122918-6e47aa23133c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGluZGlhbiUyMHNob3BrZWVwZXJ8ZW58MHx8MHx8fDA%3D",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      rating: 5.0,
    },
    {
      name: "Client 3",
      image:
        "https://images.unsplash.com/photo-1611413194619-43d598287739?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGluZGlhbiUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      rating: 4.0,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === clients.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [clients.length]);

  return (
    <div className="imgagediv">
      <div className="head" style={{ textAlign: "center" }}>
        <h1>Our Happy Clients</h1>
        <p>
          We think big and have hands in all leading technology for Website
          design & Development.
        </p>
      </div>
      <div className="image-container">
        <div className="image-slider">
          {clients.map((client, index) => (
            <img
              className="image"
              key={index}
              src={client.image}
              alt={`Client ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardSlider;
