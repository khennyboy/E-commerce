import React from 'react'
import avatar from '../images/image-avatar.png';
import open from '../images/icon-menu.svg'
// import closeMenu from '../images/icon-close.svg'
import cartIcon from '../images/icon-cart.svg'
import deleteIcon from '../images/icon-delete.svg'
import item1 from '../images/image-product-1.jpg'

const Nav = () => {
  return (
    <nav className='flex items-center flex-wrap 
      border-b-[3px] border-b-black/20' >
        <img src={open} alt='toggleMenu' className='hidden' />
        <h1 className='text-4xl font-bold mr-[4rem] '>Sneakers</h1>
        <div className='flex-grow-[1] space-x-[2rem]'>
            <button className='navBtn'>Collections</button>
            <button className='navBtn'>Men</button>
            <button className='navBtn'>Women</button>
            <button className='navBtn'>About</button>
            <button className='navBtn'>Contact</button>
        </div>
        <div className='flex items-center'>
          <div className='relative mr-[3rem]'>
            <img src={cartIcon} alt="cart icon" className='cursor-pointer opacity-70
            hover:opacity-100 transition-all duration-300 ease-linear' />
            <div className='absolute hidden'>
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
          <img src={avatar} alt="user" className='mr-[4rem] w-[5rem] 
          object-contain' />
        </div>
    </nav>
  )
}

export default Nav