import React from 'react'
import AboutImage from '../images/AboutImage.jpg'
import '../styles/About.css'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
const About = () => {
  return (
    <>
   <Header/>
   <h1 className='text-center'>About Us</h1>
    <div id='about-box'>

      <div className='about-container'>
            <h2 className='about-heading'>About Us</h2>
            <h6>We've beem making healthy food last for 10 years</h6>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse ab
                eos omnis, nobis dignissimos perferendis et officia architecto,
                fugiat possimus eaque qui ullam excepturi suscipit aliquid optio,
                maiores praesentium soluta alias asperiores saepe commodi
                consequatur? Perferendis est placeat facere aspernatur!
            </p>
             <button className='btn btn-outline-primary '>Explore!</button>
         </div>
        <div className=" about-img ">
            <img  src={AboutImage} alt="food"  />
        </div>
    </div>
    <Footer/>
     </>
  )
}

export default About
