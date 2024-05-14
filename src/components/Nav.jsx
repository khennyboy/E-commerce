import React from 'react'
import avatar from '../images/image-avatar.png';
import open from '../images/icon-menu.svg'
import closeMenu from '../images/icon-close.svg'
import cartIcon from '../images/icon-cart.svg'
import deleteIcon from '../images/icon-delete.svg'
import item1 from '../images/image-product-1.jpg'

const Nav = () => {
  return (
    <nav className='flex'>
        <img src={open} alt='toggleMenu' className='hidden' />
        <h1>Sneakers</h1>
        <div>
            <button>Collections</button>
            <button>Men</button>
            <button>Women</button>
            <button>About</button>
            <button>Contact</button>
        </div>
        <div className='relative'>
          <img src={cartIcon} alt="cart icon" />
          <div className='absolute'>
            <h3>Cart</h3>
            <div>
              <img src={item1} alt="item" />
              <div>
                <p>Fall Limited Edition Sneakers</p>
                <span>$125.00 x 3</span>
                <span>$375.00</span>
              </div>
              <button><img src={deleteIcon} alt="close_icon" /></button>
            </div>
            <button>Checkout</button>
          </div>
        </div>
        <img src={avatar} alt="user" />
    </nav>
  )
}

export default Nav