import React from 'react'
import Home from './components/pages/Home'
import Menu from './components/pages/Menu'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Category from './components/pages/Category'
import Testimonial from './components/pages/Testimonial'
import Cart from './components/pages/Cart'
import FoodAI from './components/pages/FoodAI'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
        <BrowserRouter>
             <Routes>
                  <Route path="/" element = {<Home/>}/>
                  <Route path="/menu" element = {<Menu/>}/>
                  <Route path="/about" element = {<About/>}/>
                  <Route path="/contact" element = {<Contact/>}/>
                  <Route path="/testimonial" element = {<Testimonial/>}/>
                  <Route path="/category" element = {<Category/>}/>
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/foodai" element={<FoodAI />} />
             </Routes>
        
        </BrowserRouter>
      
    </div>
  )
}

export default App
