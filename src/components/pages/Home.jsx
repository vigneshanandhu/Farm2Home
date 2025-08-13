import React from 'react'
import '../styles/Home.css'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate = useNavigate()
  return (
        <>
              <Header/>
              {/* Highlights Bar with content */}
              <div className="highlights-bar">
                <div className="highlights-track">
                  <span className="highlight-item">
                    🌱 <strong>Sustainability:</strong> We use eco-friendly packaging and source ingredients from local farms to reduce our carbon footprint. Join us in building a greener future!
                  </span>
                  <span className="highlight-item">
                    🤖 <strong>Smart Recommendations:</strong> Personalized food suggestions coming soon! Our AI will help you discover new favorites based on your taste and order history.
                  </span>
                </div>
              </div>
              <div className='background home-main'>
                <div className='text-center pt-4 text-light' id='home-txt'>
                  <h1 style={{fontWeight:700, fontSize:"2.5rem"}}>Eat Right Food</h1>
                  <h4 style={{fontWeight:400}}>Eat healthy, it is good for our health</h4>
                  <button className='btn btn-primary' onClick={()=>navigate("/category")} style={{borderRadius:"19px"}}>Explore!!</button>
                </div>
              </div>
              <Footer/>
         </>
  )
}

export default Home


