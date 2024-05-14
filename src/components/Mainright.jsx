import React from 'react'
import plus from '../images/icon-plus.svg'
import minus  from '../images/icon-minus.svg';
import cartIcon from '../images/icon-cart.svg'
const Mainright = () => {
  return (
    <div className='w-[60%]'>
      <div className='w-[70%]'>
          <p className='text-DarkOrange font-bold text-xl mb-3'>SNEAKER COMPANY</p>
          <h3 className='font-bold text-[3rem] tracking-tight leading-[1] mb-[1.5rem]'>Fall Limited Edition <br /> Sneakers</h3>
          <p className='opacity-50 leading-[1.7] text-lg font-semibold'>
          These low-profile sneakers are your perfect casual wear
          companion. Featuring a durable rubber outer sole. they'll
          withstand anything the weather can offer.
          </p>
          <div className='flex flex-wrap items-center gap-x-[1rem] font-bold'>
              <span id='discountPrice' className='text-[2.5rem] '>$125.00</span>
              <span id='discount' className='bg-PaleOrange font-[900] py-1 px-2 text-DarkOrange'>50%</span>
              <span id='actualPrice' className='w-full text-GrayishBlue text-lg line-through'>$250.00</span>
          </div>
          <div className='flex gap-[3rem] mt-[3rem] '>
          <div className='bg-LightGrayishBlue flex items-center rounded-[5px]'>
              <button className='px-8 py-4'><img src={minus} alt="minus_icon" /></button>
              <span className='font-bold'>0</span>
              <button className='px-8 py-4'><img src={plus} alt="plus_icon" /></button>
          </div>
          <button className='bg-DarkOrange cursor-pointer text-white font-bold px-[3rem] rounded-[5px]
           hover:bg-PaleOrange hover:text-DarkOrange transition-all duration-300 ease-linear group '>
              <img src={cartIcon} alt="cart_icon" className='align-middle inline-block  mr-[1rem] brightness-200 '  />
              Add to cart
          </button>
          </div>
      </div>
    </div>
  )
}

export default Mainright