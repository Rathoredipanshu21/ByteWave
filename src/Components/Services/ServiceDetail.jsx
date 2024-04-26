import React from 'react';
import './ServiceDetail.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const websiteData = [
  {
    "id": 1,
    "title": "Portfolio Website",
    "description": "Showcase your work beautifully with a personalized portfolio website.",
    "icon": "https://img.bytewave.in/icon/portfolio.png",
    "img": "https://plus.unsplash.com/premium_photo-1661670152522-8db946b83f81?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydGZvbGlvJTIwd2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "id": 2,
    "title": "E-commerce Website",
    "description": "Sell products online easily with a user-friendly e-commerce website.",
    "icon": "https://img.bytewave.in/icon/shopping-cart.png",
    "img": "https://plus.unsplash.com/premium_photo-1683758342885-7acf321f5d53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZSUyMGNvbW1lcmNlJTIwd2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "id": 3,
    "title": "Blog Website",
    "description": "Share your thoughts and ideas with the world through a captivating blog website.",
    "icon": "https://img.bytewave.in/icon/blogging.png",
    "img": "https://plus.unsplash.com/premium_photo-1684581214880-2043e5bc8b8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZyUyMHdlYnNpdGV8ZW58MHx8MHx8fDA%3D"
  },
  {
    "id": 4,
    "title": "Business Website",
    "description": "Establish your brand online with a professional business website.",
    "icon": "https://img.bytewave.in/icon/business.png",
    "img": "https://plus.unsplash.com/premium_photo-1664477033969-71347fb05a5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnVzaW5lc3MlMjB3ZWJzaXRlfGVufDB8fDB8fHww"
  },
  {
    "id": 5,
    "title": "Educational Website",
    "description": "Educate and engage learners effectively with an interactive educational website.",
    "icon": "https://img.bytewave.in/icon/education.png",
    "img": "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "id": 6,
    "title": "Portfolio Website",
    "description": "Showcase your work beautifully with a personalized portfolio website.",
    "icon": "https://img.bytewave.in/icon/portfolio.png",
    "img": "https://images.unsplash.com/photo-1519222970733-f546218fa6d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D"
  },
  {
    "title": "Government Website",
    "description": "Provide information and services related to government agencies, policies, and initiatives. Examples include official government portals, departmental websites, and online services for citizens."
,    "img": "https://images.unsplash.com/photo-1555848962-6e79363ec58f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z292ZXJubWVudHxlbnwwfHwwfHx8MA%3D%3D"

  },
  {
    "title": "Private Company Website",
    "description": "Showcase products, services, and corporate information of private companies. These websites often serve as a marketing tool to attract customers and clients."
,    "img": "https://plus.unsplash.com/premium_photo-1672239007280-f12d9c812a89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnVpbGRpbnxlbnwwfHwwfHx8MA%3D%3D"

  },
  {
    "title": "Nonprofit Organization Website",
    "description": "Raise awareness, promote causes, and facilitate donations for nonprofit organizations. These websites often include information about the organization's mission, programs, and ways to get involved or contribute."
    ,    "img": "https://images.unsplash.com/photo-1613399421095-41f5c68e9f8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bm9uJTIwcHJvZml0fGVufDB8fDB8fHww"

  }
];


const ServiceDetail = () => {
  return (
    <>
      <Navbar />
      <div className="website-types-page">
        <h1>We Deal in all types of Websites</h1>
        <hr />
        <div className="website-grid-page">
          {websiteData.map(website => (
            <div key={website.id} className="website-card-page">
              {/* <img src={website.icon} alt={website.title} className="website-icon" /> */}
              <h2>{website.title}</h2>
              <img src={website.img} alt={website.title} className="website-image-page" />
              <p>{website.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default ServiceDetail;
