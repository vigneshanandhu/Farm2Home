import React from 'react'
import TestimonialData from '../data/TestimonialData'
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import { FaStar } from "react-icons/fa";
import '../styles/Testimonial.css'
const Testimonial = () => {
  return (
    <div>
        <Header/>
      <h2 className="testimonial-title text-center mt-5">What Our Customers Say</h2>
<div className="testimonial-container container mt-5 ">
    {TestimonialData.map((value)=>(
        <div className="testimonial-box">
             <div className="customer-detail">
                <div className="customer-photo" >
                    <img src={value.image} alt=""/>
                    <p className="customer-name">{value.name}</p>
                </div>
            </div>
        <div className="star-rating text-warning text-center">
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            
        </div>
            <p className="testimonial-text">
                {value.description}
            </p>
        </div>
        ))}
     </div>
     <Footer/>
    </div>
  )
}

export default Testimonial
