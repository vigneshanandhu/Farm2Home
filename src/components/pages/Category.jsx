import React from 'react'
import CategoryData from '../data/CategoryData'
import '../styles/Category.css'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
const Category = () => {
  return (
    <div>
        <Header/>
        <h2 className='text-center mt-5'>Types of food</h2>
        <div className="food-container container  mt-5 mb-5">
            {CategoryData.map((value)=>(
                <div className="food-type fruite">
                <div className="img-container">
                <img src={value.image} alt="error" />
                <div className="img-content">
                <h3 className='text-dark text-center'>{value.name}</h3>
                <a href="https://en.wikipedia.org/wiki"className="btn btn-primary"target="blank">{value.button}</a>
                </div>
                </div>
                </div>
            ))}
        </div>
        <Footer/>

    </div>
  )
}

export default Category
