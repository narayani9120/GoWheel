import React from 'react'

const CarList = () => {
  return (
    <div>
      <div class="card">
    <img src="car-image.jpg" alt="Car Image"/>
    <div class="card-content">
        <h2>Datsun Redi-GO 2018</h2>
        <div class="rating">
            <span>5.00</span>
            <p>| 4 Trips</p>
        </div>
        <div class="price">
            ₹109/hr
            <small>₹436 excluding fees</small>
        </div>
        <div class="location">
            <span class="icon">&#x1F6B6;</span> 
            <span>37.8 km away</span>
        </div>
    </div>
</div>

     </div>
  )
}

export default CarList
