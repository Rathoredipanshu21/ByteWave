import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div>
      <div class="hero-section-main">

        <div class="hero-section-left">
          <h1 class="hero-title">
            {" "}
            Empowering Your <span id="span">Digital</span> Journey
          </h1>
          <p class="hero-description">Developing tech from ideas</p>
         {/* <a href="/Contact"><button >Contact us </button></a>  */}
         <button><a href="/Contact" id="abtn">Contact us</a></button>
        </div>
        
        <div class="hero-section-right">
          <img
            src="https://img.freepik.com/premium-photo/teenage-boys-using-computer_1015293-6089.jpg?w=826"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
