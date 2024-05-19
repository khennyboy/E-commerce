import React from 'react'
import deleteIcon from '../images/icon-delete.svg';
import item1 from '../images/image-product-1.jpg';
const CartItems = ({show}) => {
    
  return (
    <div className={`absolute top-[100%] right-[0%] z-10 hidden  ${show ? 'showCartedItem' :''}`}>
        <div className='w-[20vw] shadow-[0_0_2px_1px_#E8E8E8]
        rounded-[10px] py-[1.5rem] flex flex-col bg-white 
        mediumDesktop:w-[30vw] largeTablet:w-[35vw] android:w-[80vw] tablet:w-[50vw]
        android:py-2'>
            <h3 className='border-b-black/20 border-b-[1px] px-6 pb-4 font-bold mb-5 tablet:px-2'>Cart</h3>
            <div className='flex justify-between items-center space-x-6 px-6 mb-5 largeTablet:space-x-4
            tablet:space-x-2 tablet:px-2'>
            <div className='w-[80px] tablet:w-[50px]'>
                <img src={item1} alt="item" className='w-full object-cover rounded-[10px]' />
            </div>
            <div>
                <p className='tablet:leading-tight'>Fall Limited Edition Sneakers</p>
                <span>$125.00 x 3</span>
                <span className='font-bold ml-3 inline-block text-lg largeTablet:text-base
                tablet:text-base'>$375.00</span>
            </div>
            <button><img src={deleteIcon} alt="close_icon" /></button>
            </div>
            <button className='bg-DarkOrange text-white rounded-[5px] font-bold mx-6 py-2 hover:bg-PaleOrange hover:text-DarkOrange
            transition-all duration-300 ease-linear tablet:mx-2 hover:ring-1 hover:ring-DarkOrange ring-offset-2'>Checkout</button>
        </div>
   </div>
  )
}

export default CartItems