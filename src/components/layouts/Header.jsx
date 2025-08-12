import React from 'react'
import '../styles/Header.css'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from 'react';

const Header = () => {
     const [showMenu, setShowMenu] = useState(false);
     const nav_title = {
      title:"Farm2Home"
    }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-black text-light navbar-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="">{nav_title.title}</a>

            <div>
                <ul className={showMenu ? "nav-links active" : "nav-links"}>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/"}onClick={() => setShowMenu(false)}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/menu"}onClick={() => setShowMenu(false)}>Menu</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/about"}onClick={() => setShowMenu(false)}>About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/contact"}onClick={() => setShowMenu(false)}>Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/testimonial"}onClick={() => setShowMenu(false)}>Testimonial</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/category"}onClick={() => setShowMenu(false)}>Category</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/cart"}onClick={() => setShowMenu(false)}>Cart</Link>
                    </li>
                  
                </ul>
            </div>
            <div className='menu-icon' onClick={()=>setShowMenu(!showMenu)}>
                    {showMenu ? <IoCloseSharp /> : <FaBars />}
                 
            </div>
            
        </div>
    
        </nav>
      
    </div>
  )
}

export default Header
