import React from 'react';
import './GraphicDesign.css'; // Import your CSS file for styling
import Navbar from '../Navbar/Navbar'; // Import Navbar component
import Footer from '../Footer/Footer'; // Import Footer component

const GraphicDesignPage = () => {
  return (
    <>
      <Navbar /> {/* Include Navbar component */}
      <div className="graphic-design-container"> {/* Container for graphic design content */}
        <h1>About Graphic Design</h1> {/* Heading */}
        <p>
        Certainly! Here's a text-only description of graphic design services provided by your company in 250 words:

---

**Graphic Design Services**

Our graphic design services are meticulously crafted to meet the diverse needs of businesses and individuals seeking to establish a compelling visual identity. With a keen understanding of design principles and a passion for creativity, we offer a comprehensive suite of design solutions tailored to elevate brands and captivate audiences across various platforms.

**Branding and Logo Design:** We specialize in creating distinctive brand identities that reflect the essence and values of our clients' businesses. From logo design to brand collateral, we meticulously craft visual elements that resonate with target audiences and leave a lasting impression.

**Web Graphics:** Our expertise extends to designing visually appealing graphics for websites, ensuring seamless integration with the overall user experience. From website banners to social media graphics, we create captivating visuals that enhance online presence and engagement.

**Print Materials:** We excel in designing print materials such as business cards, brochures, flyers, and posters that convey professionalism and leave a memorable impression. With attention to detail and a focus on quality, we ensure that every print piece reflects the essence of the brand and communicates the intended message effectively.

**Creative Concepts:** Our team of experienced designers is adept at conceptualizing innovative design solutions that push the boundaries of creativity. Whether it's a unique illustration, a compelling infographic, or a visually stunning presentation, we strive to bring our clients' ideas to life in a visually impactful manner.

**Custom Solutions:** We understand that every project is unique, which is why we offer custom design solutions tailored to the specific needs and objectives of each client. From concept development to final execution, we collaborate closely with our clients to ensure that the end result exceeds expectations and delivers tangible results.

In summary, our graphic design services are driven by a passion for creativity, a commitment to quality, and a dedication to helping our clients succeed in their endeavors. With a focus on innovation and excellence, we strive to be the go-to partner for all your graphic design needs.

        </p> {/* Paragraph describing graphic design */}
        <div className="image-gallery"> {/* Container for image gallery */}
          <img src="https://images.unsplash.com/photo-1626785774573-4b799315345d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhcGhpYyUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D" alt="Graphic Design Image 1" /> {/* Example image 1 */}
          <img src="https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JhcGhpYyUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D" alt="Graphic Design Image 2" /> {/* Example image 2 */}
          <img src="https://plus.unsplash.com/premium_photo-1661284854881-77b3c89aa176?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z3JhcGhpYyUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D" alt="Graphic Design Image 3" /> {/* Example image 3 */}
        </div>
      </div>
      <Footer /> {/* Include Footer component */}
    </>
  );
}

export default GraphicDesignPage;
