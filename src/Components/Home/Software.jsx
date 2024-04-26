import React from 'react';
import './Software.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const websiteData = [
  {
    "title": "Institute LMS",
    "about": "Our Institute LMS offers a comprehensive solution tailored for educational institutions, providing efficient management of courses, assignments, student enrollment, and communication channels. With intuitive features, we ensure seamless administration and enhanced learning experiences for institutes seeking to optimize their educational operations.",
    "img": "https://images.unsplash.com/photo-1530099486328-e021101a494a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGFsZW50ZWQlMjBzdHVkZW50fGVufDB8fDB8fHww"
  },
  {
    "title": "College LMS",
    "about": "Our College LMS caters specifically to higher education institutions, delivering robust tools for course management, grading, student collaboration, and administrative tasks. Designed to streamline academic processes, our platform empowers colleges to facilitate effective teaching and learning experiences while optimizing administrative workflows for greater efficiency.",
    "img": "https://images.unsplash.com/photo-1535982330050-f1c2fb79ff78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q29sbGVnZSUyMExNU3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "title": "School LMS",
    "about": "Our School LMS is crafted to meet the unique needs of primary and secondary educational institutions, offering comprehensive features for lesson planning, attendance tracking, parent communication, and student performance monitoring. With intuitive tools, we empower schools to create engaging learning environments and foster academic excellence while simplifying administrative tasks.",
    "img": "https://images.unsplash.com/photo-1703969083653-da62f9ea70af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHNjaG9vbCUyMHNvZnR3YXJlfGVufDB8fDB8fHww"
  },
  {
    "title": "Custom LMS",
    "about": "Tailored to your needs, our Custom LMS offers bespoke solutions designed specifically for your requirements. With personalized features and adaptable functionalities, we ensure that your learning management system aligns perfectly with your organization's unique objectives, enhancing efficiency and effectiveness in educational operations",
    "img": "https://images.unsplash.com/photo-1623057000049-e220f79c7051?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGx1c3xlbnwwfHwwfHx8MA%3D%3D"
  }
  
];

const ERPdata =[
    {
        "Service": "Grocery",
        "Description": "Our Grocery ERP provides tailored solutions for grocery stores and supermarkets, offering streamlined inventory management, sales tracking, supplier management, and customer relationship management (CRM) capabilities. With our intuitive platform, grocery businesses can efficiently manage their operations, optimize inventory levels, enhance customer satisfaction, and drive business growth.",
        "img": "https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3JvY2VyeXxlbnwwfHwwfHx8MA%3D%3D"
      },
      {
        "Service": "Garments",
        "Description": "Our Garments ERP is specifically designed for garment manufacturing and retail businesses, providing comprehensive features for production planning, order management, inventory tracking, and quality control. With our tailored solution, garment companies can streamline their operations, optimize production processes, ensure product quality, and improve overall efficiency and profitability.",
        "img": "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FybWVudHN8ZW58MHx8MHx8fDA%3D"
      },
      {
        "Service": "Distributors",
        "Description": "Our Distributors ERP offers customized solutions for distribution companies, empowering them with functionalities for order processing, logistics management, inventory optimization, and sales analytics. With our comprehensive platform, distributors can streamline their operations, enhance supply chain efficiency, improve inventory management, and drive business growth and profitability.",
        "img": "https://plus.unsplash.com/premium_photo-1661681726667-1dc005655ade?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fERpc3RyaWJ1dG9yc3xlbnwwfHwwfHx8MA%3D%3D"
      },
      {
        "Service": "Agencies",
        "Description": "Our Agencies ERP caters to advertising agencies, marketing firms, and creative studios, providing comprehensive tools for project management, resource allocation, client billing, and campaign tracking. With our intuitive platform, agencies can streamline their operations, improve project collaboration, ensure efficient resource utilization, and drive success for their clients' campaigns.",
        "img": "https://images.unsplash.com/photo-1622258418550-46a51f29f084?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QWdlbmNpZXN8ZW58MHx8MHx8fDA%3D"
      },
      {
        "Service": "Pharma",
        "Description": "Our Pharma ERP offers tailored solutions for pharmaceutical companies and pharmacies, providing robust features for batch tracking, regulatory compliance, inventory control, and prescription management. With our comprehensive platform, pharmaceutical businesses can streamline their operations, ensure regulatory compliance, optimize inventory management, and enhance patient care and safety.",
        "img": "https://images.unsplash.com/photo-1547489432-cf93fa6c71ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fFBoYXJtYXxlbnwwfHwwfHx8MA%3D%3D"
      },{
        "title": "Custom LMS",
        "about": "Tailored to your needs, our Custom LMS offers bespoke solutions designed specifically for your requirements. With personalized features and adaptable functionalities, we ensure that your learning management system aligns perfectly with your organization's unique objectives, enhancing efficiency and effectiveness in educational operations",
        "img": "https://images.unsplash.com/photo-1623057000049-e220f79c7051?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGx1c3xlbnwwfHwwfHx8MA%3D%3D"
      }
]

const Software = () => {
  return (
    <>
      <Navbar/>
        <h1 style={{textAlign:'center', paddingTop:'100px',color:'#fff'}}>We Deal in all types of Software</h1>
        <hr />
      <div className="website-types">
            <h1 style={{textAlign:'center',color:'#fff',padding:'20px'}}>Learning Management System</h1>
        <div className="website-grid">
          {websiteData.map((website, index) => (
            <div key={index} className="website-card">
              <h2>{website.title}</h2>
              <img src={website.img} alt={website.title} className="website-image" />
              <p>{website.about}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="website-types">
            <h1 style={{textAlign:'center',color:'#fff',padding:'20px'}}>Enterprise Resource Planning</h1>
        <div className="website-grid">
          {ERPdata.map((website, index) => (
            <div key={index} className="website-card">
              <h2>{website.Service}</h2>
              <img src={website.img} alt={website.title} className="website-image" />
              <p>{website.Description}</p>
            </div>
          ))}
        </div>
      </div>

      




      <Footer/>
    </>
  );
}

export default Software;
