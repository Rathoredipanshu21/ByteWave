// Main.js
import React from 'react';
import './App.css';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Services from './Components/Services/Services';
import Footer from './Components/Footer/Footer';
import OurExpert from './Components/Services/WorkTechnology';
import WorkTechnology from './Components/Services/WorkTechnology';
import Serve from './Components/Services/Serve';
import Commited from './Components/Home/Commited';
import ExpertTeam from './Components/Home/ExpertTeam';
import HappyClients from './Components/Home/HappyClients';

function Main() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Services/>
      <Commited/> 
      <Serve/> 
      <ExpertTeam/>
      <WorkTechnology/>
      <HappyClients/>
      <Footer/>
    </>
  );
}

export default Main;
