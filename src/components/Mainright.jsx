import React from 'react'
import plus from '../images/icon-plus.svg'
import minus  from '../images/icon-minus.svg';
import cartIcon from '../images/icon-cart.svg'
const Mainright = () => {
  return (
    <div>
        <p>SNEAKER COMPANY</p>
        <h3>Fall Limited Edition <br /> Sneakers</h3>
        <p>
        These low-profile sneakers are your perfect casual wear
        companion. Featuring a durable rubber outer sole. they'll
        withstand anything the weather can offer.
        </p>
        <div>
            <span id='discountPrice'>$125.00</span>
            <span id='discount'>50%</span>
            <span id='actualPrice'>$250.00</span>
        </div>
        <div>
        <div>
            <button><img src={minus} alt="minus_icon" /></button>
            <span>0</span>
            <button><img src={plus} alt="plus_icon" /></button>
        </div>
        <button>
            <img src={cartIcon} alt="cart_icon" />
            Add to cart
        </button>
        </div>
    </div>
  )
}

export default Mainright