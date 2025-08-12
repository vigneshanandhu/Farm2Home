import React, { useContext } from 'react';
import MenuData from '../data/MenuData';
import '../styles/Menu.css';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import { CartContext } from './CartContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Menu = () => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (item) => {
    addToCart(item);
    toast.success("Item added to cart!", {
      position: "top-right",
      autoClose: 2000, 
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <>
      <Header />
      <div className='food-menu'>
        <h1 className='food-menu-heading text-center'>Menu</h1>
        <div className='food-menu-container container d-flex mt-5' id='food-menu-container'>
          {MenuData.map((value, index) => (
            <div className='food-menu-item d-flex mt-5' key={index} id='food-box'>
              <div className='food-img'>
                <img src={value.image} alt={value.title} />
              </div>
              <div className="food-description">
                <h2 className="food-titile">{value.title}</h2>
                <p className='font-size'>{value.description}</p>
                <p className="food-price">Price: ₹ {value.price}</p>
                <button
                  className='btn btn-success'
                  onClick={() => handleAddToCart(value)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Toast container */}
      <ToastContainer />
      <Footer />
    </>
  );
}

export default Menu;
