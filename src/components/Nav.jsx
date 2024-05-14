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
      border-b-[3px] border-b-black/20 relative ' >
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
          <div className= 'mr-[3rem]'>
            <img src={cartIcon} alt="cart icon" className='cursor-pointer ' />
          </div>
          <img src={avatar} alt="user" className='mr-[4rem] w-[5rem] 
          object-contain' />
        </div>

        <div className='absolute top-[90%] right-[0%] w-fit shadow-[0_0_2px_1px_#E8E8E8]
            rounded-[10px]  py-[1.5rem] flex flex-col ' >
            <h3 className='border-b-black/20 border-b-[1px] px-6 pb-4 font-bold mb-5'>Cart</h3>
            <div className='flex  justify-between items-center space-x-6 px-6 mb-5'>
              <div className='w-[80px] '>
                  <img src={item1} alt="item" className='w-full object-cover rounded-[10px]' />
              </div>
              <div>
                <p>Fall Limited Edition Sneakers</p>
                <span>$125.00 x 3</span>
                <span className='font-bold ml-3 inline-block text-lg'>$375.00</span>
              </div>
              <button ><img src={deleteIcon} alt="close_icon" /></button>
            </div>
            <button className='bg-DarkOrange text-white rounded-[5px] font-bold mx-6 py-2
            hover:bg-PaleOrange hover:text-DarkOrange transition-all duration-300 ease-linear '>Checkout</button>
        </div>
    </nav>
  )
}

export default Nav