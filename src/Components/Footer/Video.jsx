import React, { useEffect, useRef } from 'react';
import gsap from 'gsap'; // Import GSAP
import roadImage from '../Assets/road.jpg'; 
import bikeImage from '../Assets/bike.jpg';
import carImage from '../Assets/car.jpg';

const Video = () => {

    const bikeRef = useRef(null); // Reference to the bike image
    const carRef = useRef(null); // Reference to the car image

    useEffect(() => {
  
        const tl = gsap.timeline({ repeat: -1 }); 

        
        tl.to(bikeRef.current, { x: '1500%', duration: 10, ease: 'linear' }, 0) // Start bike from left to middle
        .to(carRef.current, { x: '-1500%', duration: 10, ease: 'linear' }, 0) // Start car from right to middle
        .set(bikeRef.current, { x: '0%' }) // Reset bike position to start from left again
        .set(carRef.current, { x: '0%' });

        return () => tl.kill(); 
    }, []);

    return (
        <div style={{backgroundColor:'black', height:'100vh'}} >
        <div style={{ position: 'relative', overflow: 'hidden', width: '100%', height: '300px', backgroundColor:'black'}}>
            <img src={roadImage} alt="road" style={{ width: '100%', height: '100%' }} />
            <img ref={bikeRef} src={bikeImage} alt="bike" style={{ position: 'absolute', bottom: '50px', left: '0', maxWidth: '100%', height: 'auto' }} />
            <img ref={carRef} src={carImage} alt="car" style={{ position: 'absolute', top: '200px', maxWidth:'100%', right: '0' }} />
        </div>
        </div>
    );
};

export default Video;