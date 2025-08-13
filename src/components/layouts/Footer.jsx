import React, { useState } from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6"; 
import '../styles/Footer.css'
const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
  };
  return (
    <div className='footer-box bg-black text-white'>
      <div className='footer-icons'>
         <FaInstagram />
         <FaTwitter/>
         <FaYoutube/>
         <FaGithub/>
      </div>
      {/* Subscribe Section */}
      <div className="footer-subscribe mt-3 text-center">
        {subscribed ? (
          <span>Thank you for subscribing!</span>
        ) : (
          <form onSubmit={handleSubscribe} className="d-inline-block">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="form-control d-inline-block w-auto me-2"
              required
            />
            <button className="btn btn-primary btn-sm" type="submit">Subscribe</button>
          </form>
        )}
      </div>
      <h1 className='mt-3 text-center'>Restaurant @ all Rights Reserved</h1>
    </div>
  )
}

export default Footer
