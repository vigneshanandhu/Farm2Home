import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

const loadRazorpayScript = (src) => {
  return new Promise((resolve) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve(true);
      return;
    }
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const [isRazorpayReady, setIsRazorpayReady] = useState(false);

  React.useEffect(() => {
    loadRazorpayScript('https://checkout.razorpay.com/v1/checkout.js').then((loaded) => {
      setIsRazorpayReady(loaded && !!window.Razorpay);
    });
  }, []);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Handler for Buy Now button
  const handleBuyNow = () => {
    if (!window.Razorpay) {
      alert('Razorpay SDK not loaded yet.');
      return;
    }

    const options = {
      key: 'rzp_test_ZfLlbDNrwviaJy', // Replace with your Razorpay key
      amount: totalPrice * 100, // Amount in paise
      currency: 'INR',
      name: 'FoodyStore',
      description: 'Order Payment',
      handler: function (response) {
        alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
        clearCart(); // Clear cart after payment
      },
      prefill: {
        name: 'vignesh',
        email: 'vignesh@example.com',
        contact: '9999999999',
      },
      notes: {
        address: 'Razorpay Corporate Office',
      },
      theme: {
        color: '#3399cc',
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <>
      <Header />
      <div className="container mt-5">
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <table className="table">
              <thead>
                <tr>
                  <th>Food</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>₹ {item.price}</td>
                    <td>{item.quantity}</td>
                    <td>₹ {item.price * item.quantity}</td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h4>Total Price: ₹ {totalPrice}</h4>
            <button className="btn btn-warning" onClick={clearCart}>Clear Cart</button>
            {/* Buy Now button */}
            <button
              className="btn btn-success ms-2"
              onClick={handleBuyNow}
              disabled={!isRazorpayReady || totalPrice === 0}
            >
              {isRazorpayReady ? 'Buy Now' : 'Loading...'}
            </button>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Cart;

