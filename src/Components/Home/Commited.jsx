import React from 'react';
import './Commited.css'

const Commited = () => {
  return (
    <div className="background-container">
      <div className="content">
        
       <div className="commited-content">
        <div className="commited-box">
          <h3>648 + </h3>
          <p>Happy Clients</p>
        </div>
         <div class="vertical-line"></div>
        <div className="commited-box">
          <h3>987 +</h3>
          <p>Projects</p>
        </div>
        <div class="vertical-line"></div>

        <div className="commited-box">
          <h3>20 + </h3>
          <p>Team Member</p>

        </div>
        <div class="vertical-line"></div>

        <div className="commited-box">
          <h3 style={{textAlign:'center'}}> 3 +</h3>
          <p>Year of Experience</p>
        </div>


       </div>

      <h2 className="givememargin" style={{textAlign:'center'}}>WE'RE DEDICATED TO DELIVERING TOP-NOTCH PROJECTS OF HIGH QUALITY.</h2>
      </div>
    </div>
  );
};

export default Commited;