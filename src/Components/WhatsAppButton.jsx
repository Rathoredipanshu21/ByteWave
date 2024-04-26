import React from "react";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+918405001041"; 
    const message = "Hello, I'm interested in your services."; 

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: "9999" }}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png"
        alt="WhatsApp Icon"
        style={{ width: "50px", cursor: "pointer" }}
        onClick={handleWhatsAppClick} 
      />
    </div>
  );
};

export default WhatsAppButton;
