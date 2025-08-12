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
                    <div className='background'>
                      <div className='text-center pt-5 text-light'  id='home-txt'>
                         <h2>Eat Right Food</h2>
                          <h6>Eat healthy, it is good for our health</h6>
                          <button className='btn btn-primary 'onClick={()=>navigate("/category")} style={{borderRadius:"19px"}}>Explore!!</button>
                      </div>
                    </div>
              <Footer/>
         </>
    
  
  )
}

export default Home
