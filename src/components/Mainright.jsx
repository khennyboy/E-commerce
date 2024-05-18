import React from 'react'
import plus from '../images/icon-plus.svg'
import minus  from '../images/icon-minus.svg';
import cartIcon from '../images/icon-cart.svg'
const Mainright = () => {
  return (
    <div className='w-[60%] mediumDesktop:w-[50%] largeTablet:w-[55%]
    tablet:w-full'>
      <div className='w-[70%] mediumDesktop:w-[90%] largeTablet:w-full
        tablet:w-full'>
          <p className='text-DarkOrange font-bold text-xl mb-3'>SNEAKER COMPANY</p>
          <h3 className='font-bold text-[3rem] tracking-tight leading-[1] mb-[1.5rem] 
          tablet:text-[2.5rem] android:text-[2rem]'>Fall Limited Edition <br className='android:hidden' /> Sneakers</h3>
          <p className='opacity-50 leading-[1.7] text-lg font-semibold
          android:text-base'>
          These low-profile sneakers are your perfect casual wear
          companion. Featuring a durable rubber outer sole. they'll
          withstand anything the weather can offer.
          </p>
          <div className='flex flex-wrap items-center gap-x-[1rem] font-bold  tablet:flex-nowrap 
          android:mt-4'>
              <span id='discountPrice' className='text-[2.5rem] android:text-[1.5rem]'>$125.00</span>
              <span id='discount' className='bg-PaleOrange font-[900] py-1 px-2 text-DarkOrange '>50%</span>
              <span id='actualPrice' className='w-full text-GrayishBlue text-lg line-through 
              android:text-right'>$250.00</span>
          </div>
          <div className='flex gap-[3rem] mt-[3rem] android:flex-col android:gap-6  *:flex-grow tablet:gap-[5rem]'>
          <div className='bg-LightGrayishBlue flex items-center rounded-[5px] '>
              <button className='px-8 py-4'><img src={minus} alt="minus_icon" /></button>
              <span className='font-bold flex-grow text-center'>0</span>
              <button className='px-8 py-4'><img src={plus} alt="plus_icon" /></button>
          </div>
          <button className='bg-DarkOrange cursor-pointer text-white font-bold  rounded-[5px]
           hover:bg-PaleOrange hover:text-DarkOrange transition-all duration-300 ease-linear group 
             android:py-[10px] hover:ring-1 hover:ring-DarkOrange ring-offset-2 '>
              <img src={cartIcon} alt="cart_icon" className='align-middle inline-block  mr-[1rem] brightness-200 group-hover:brightness-0
              mediumDesktop:mr-1'  />
              Add to cart
          </button>
          </div>
      </div>
    </div>
  )
}

export default Mainright