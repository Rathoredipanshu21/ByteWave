import React, { useState } from 'react';
import './Projects.css';
import data from './data';
import ModelBox from './ModelBox'; // Change the import statement
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
const Project = () => {
  const [selectedService, setSelectedService] = useState('Services');

  const handleServiceChange = (e) => {
    setSelectedService(e.target.value);
  };
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    setShowModal(true);   
  };

  const closeModal = () => {
    setSelectedItem(null);
    setShowModal(false);
  };


 const item1 = data.find(item => item.id === 1);
 const item2 = data.find(item => item.id === 2);
 const item3 = data.find(item => item.id === 3);
 const item4 = data.find(item => item.id ===4);
 const item5 = data.find(item => item.id === 5);
 const item6 = data.find(item => item.id === 6);
//  const item7 = data.find(item => item.id === 7);
 
  return (
    <>
   <Navbar/>
    
      <div className='Main'>
        <div className='main_page'>
          <div className='project'>
            PROJECTS
           <hr />
           
            <p> Projects Showcase</p>

          </div>
          <div className='project-togler'>
            <select onChange={handleServiceChange} value={selectedService}>
              <option value='Services'>Services</option>
              <option value='website'>Website</option>
              <option value='application'>Application</option>
              <option value='software_services'>Software Services</option>
              <option value='graphic_design'>Graphic Design</option>
            </select>
          </div>
        </div>

        {(selectedService === 'Services' || selectedService === 'Services') && (
          <>
            
            {item1 && ( 
            <div key={item1.id} className='our-work-card' onClick={() => openModal(item1)}>
              <div className='work-content'>
                <h1>{item1.title}</h1>
                <p>{item1.desc}</p>
              </div>
              <div className='work-image' >
                <img src={item1.image} alt='Work Image'  />
              </div>
            </div>
          )}

{item2 && ( 
            <div key={item2.id} className='our-work-card' onClick={() => openModal(item2)}>
              <div className='work-content'>
                <h1>{item2.title}</h1>
                <p>{item2.desc}</p>
              </div>
              <div className='work-image'>
                <img src={item2.image} alt='Work Image' />
              </div>
            </div>
          )}
          {item3 && ( 
            <div key={item3.id} className='our-work-card' onClick={() => openModal(item3)}>
              <div className='work-content'>
                <h1>{item3.title}</h1>
                <p>{item3.desc}</p>
              </div>
              <div className='work-image'>
                <img src={item3.image} alt='Work Image' />
              </div>
            </div>
          )}
          {item4 && ( 
            <div key={item4.id} className='our-work-card'  onClick={() => openModal(item4)}>
              <div className='work-content'>
                <h1>{item4.title}</h1>
                <p>{item4.desc}</p>
              </div>
              <div className='work-image'>
                <img src={item4.image} alt='Work Image' />
              </div>
            </div>
          )}
          {item5 && ( 
            <div key={item5.id} className='our-work-card'  onClick={() => openModal(item5)}>
              <div className='work-content'>
                <h1>{item5.title}</h1>
                <p>{item5.desc}</p>
              </div>
              <div className='work-image'>
                <img src={item5.image} alt='Work Image' />
              </div>
            </div>
          )}
          {item6 && (
            <div key={item6.id} className='our-work-card'  onClick={() => openModal(item6)}>
              <div className='work-content'>
                <h1>{item6.title}</h1>
                <p>{item6.desc}</p>
              </div>
              <div className='work-image'>
                <img src={item6.image} alt='Work Image' />
              </div>
            </div>
          )}
                   {showModal && selectedItem && (
        <ModelBox selectedItem={selectedItem} closeModal={() => setShowModal(false)} />
      )}
          </>
        )}

        {selectedService === 'application' && (
          <>
            <div className='our-work-card'>
              <div className='work-content'>
                <h1>Food ordering Platform</h1>
                <p>A food ordering site revolutionizes the way people access and enjoy food by offering a convenient platform to browse, select, and order meals...</p>
              </div>
              <div className='work-image'>
                <img src='https://img.freepik.com/free-vector/landing-page-abstract-design-with-sphere-element-template-website-app_1217-4983.jpg?w=996' alt='alt Image' />
              </div>
            </div>
            <div className='our-work-card'>
              <div className='work-content'>
                <h1>Food ordering Platform</h1>
                <p>A food ordering site revolutionizes the way people access and enjoy food by offering a convenient platform to browse, select, and order meals...</p>
              </div>
              <div className='work-image'>
                <img src='https://img.freepik.com/free-vector/landing-page-abstract-design-with-sphere-element-template-website-app_1217-4983.jpg?w=996' alt='alt Image' />
              </div>
            </div>
            <div className='our-work-card'>
              <div className='work-content'>
                <h1>Food ordering Platform</h1>
                <p>A food ordering site revolutionizes the way people access and enjoy food by offering a convenient platform to browse, select, and order meals...</p>
              </div>
              <div className='work-image'>
                <img src='https://img.freepik.com/free-vector/landing-page-abstract-design-with-sphere-element-template-website-app_1217-4983.jpg?w=996' alt='alt Image' />
              </div>
            </div>
            
            
            
          </>
        )}
         {selectedService === 'website' && (
          <>
            <div className='our-work-card'>
              <div className='work-content'>
                <h1>Food ordering Platform</h1>
                <p>A food ordering site revolutionizes the way people access and enjoy food by offering a convenient platform to browse, select, and order meals...</p>
              </div>
              <div className='work-image'>
                <img src='https://img.freepik.com/premium-vector/abstract-background-black-color-modern-design_222229-646.jpg?w=900' alt='alt Image' />
              </div>
            </div>
            <div className='our-work-card'>
              <div className='work-content'>
                <h1>Food ordering Platform</h1>
                <p>A food ordering site revolutionizes the way people access and enjoy food by offering a convenient platform to browse, select, and order meals...</p>
              </div>
              <div className='work-image'>
                <img src='https://img.freepik.com/premium-vector/abstract-background-black-color-modern-design_222229-646.jpg?w=900' alt='alt Image' />
              </div>
            </div>
            <div className='our-work-card'>
              <div className='work-content'>
                <h1>Food ordering Platform</h1>
                <p>A food ordering site revolutionizes the way people access and enjoy food by offering a convenient platform to browse, select, and order meals...</p>
              </div>
              <div className='work-image'>
                <img src='https://img.freepik.com/premium-vector/abstract-background-black-color-modern-design_222229-646.jpg?w=900' alt='alt Image' />
              </div>
            </div>
            
            
          </>
        )}
         {selectedService === 'software_services' && (
          <>
            <div className='our-work-card'>
              <div className='work-content'>
                <h1>Food ordering Platform</h1>
                <p>A food ordering site revolutionizes the way people access and enjoy food by offering a convenient platform to browse, select, and order meals...</p>
              </div>
              <div className='work-image'>
                <img src='https://img.freepik.com/premium-vector/abstract-background-black-color-modern-design_222229-646.jpg?w=900' alt='alt Image' />
              </div>
            </div>
            <div className='our-work-card'>
              <div className='work-content'>
                <h1>Food ordering Platform</h1>
                <p>A food ordering site revolutionizes the way people access and enjoy food by offering a convenient platform to browse, select, and order meals...</p>
              </div>
              <div className='work-image'>
                <img src='https://img.freepik.com/premium-vector/abstract-background-black-color-modern-design_222229-646.jpg?w=900' alt='alt Image' />
              </div>
            </div>
            <div className='our-work-card'>
              <div className='work-content'>
                <h1>Food ordering Platform</h1>
                <p>A food ordering site revolutionizes the way people access and enjoy food by offering a convenient platform to browse, select, and order meals...</p>
              </div>
              <div className='work-image'>
                <img src='https://img.freepik.com/premium-vector/abstract-background-black-color-modern-design_222229-646.jpg?w=900' alt='alt Image' />
              </div>
            </div>
            
           
          </>
        )}

        
      </div>
      <Footer/>
    </>
  );
}

export default Project;
