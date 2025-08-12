import React from 'react'
import ContactImage from '../images/ContactImage.jpg'
import '../styles/Contact.css'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
const Contact = () => {
  return (
    <div>
        <Header/>
      <div className="contact-container container  mt-5">
            <div className="contact-img">
                <img src={ContactImage} alt="" />
            </div>
            <div className="form-container d-flex">
                <h2>Contact Us</h2>
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="E-Mail" />
                <textarea cols="30"rows="6"placeholder="Type Your Message"></textarea>
                <a href="#" className="btn btn-primary">Submit</a>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Contact
