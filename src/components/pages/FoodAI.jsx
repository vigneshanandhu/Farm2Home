import React, { useState } from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

const FoodAI = () => {
  const [chatInput, setChatInput] = useState("");
  const [chatResponse, setChatResponse] = useState("");

  const handleChatSubmit = (e) => {
    e.preventDefault();
    const input = chatInput.toLowerCase();
    let response = "Try our chef's special today!";

    if (input.includes("spicy")) response = "We recommend our Spicy Paneer Tikka.";
    else if (input.includes("sweet")) response = "How about our delicious Gulab Jamun?";
    else if (input.includes("healthy")) response = "You might like our Quinoa Salad.";
    else if (input.includes("breakfast")) response = "Start your day with our Masala Dosa.";
    else if (input.includes("vegan")) response = "Try our Vegan Buddha Bowl.";
    else if (input.includes("pizza")) response = "Our Farmhouse Pizza is a customer favorite!";
    else if (input.includes("burger")) response = "You should try our Classic Veg Burger.";
    else if (input.includes("south indian")) response = "Our Idli Sambar is a must-have!";

    setChatResponse(response);
  };

  return (
    <>
      <Header />
      <div className="container my-5 p-4 bg-white rounded shadow text-dark">
        <h2 className="mb-3">🤖 Food Recommendation AI</h2>
        <p>Ask our AI for food suggestions based on your mood or preference!</p>
        <form className="mt-3" onSubmit={handleChatSubmit}>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Tell us what you feel like eating..."
            value={chatInput}
            onChange={e => setChatInput(e.target.value)}
          />
          <button className="btn btn-success" type="submit">Ask AI</button>
        </form>
        {chatResponse && (
          <div className="alert alert-info mt-3">
            <strong>AI Suggestion:</strong> {chatResponse}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default FoodAI;
