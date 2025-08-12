import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6"; 
import '../styles/Footer.css'
const Footer = () => {
  return (
    <div className='footer-box bg-black text-white'>
      <div className='footer-icons'>
         <FaInstagram />
         <FaInstagram/>
         <FaYoutube/>
         <FaGithub/>
         
      </div>
      <h1 className='mt-3 text-center'>Restuarant @ all Rights Reserved</h1>
    </div>
  )
}

export default Footer
