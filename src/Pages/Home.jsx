import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className="home">
    <div>
      <Header />
      <div className="car-list-container">
        <section className="hero">
          <h1>The Best Platform for Car Rental</h1>
          <h1>Self-Drive Car Rentals in Location</h1>
          <p>
            We open the door for you to explore the world in comfort and style.
            Being your trusted travel partner.
          </p>
          <div className="search-bar">
            <div className="search-field">
              <label htmlFor="where">Where</label>
              <input type="text" id="where" placeholder="City or Destination" />
            </div>
            <div className="search-field">
              <label htmlFor="pickup-date">Pickup</label>
              <input type="date" id="pickup-date" />
              <input type="time" id="pickup-time" placeholder="Time" />
            </div>
            <div className="search-field">
              <label htmlFor="dropoff-date">Drop Off</label>
              <input type="date" id="dropoff-date" />
              <input type="time" id="dropoff-time" placeholder="Time" />
            </div>
            <button className="search-button">🔍</button>
          </div>
          <img src="src/assets/image.png" alt="Car" className="hero-car" />
        </section>
      </div>
      <Footer />
    </div>
    </div>
  );
};

export default Home;
