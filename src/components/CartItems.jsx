import React, { useContext, useCallback } from 'react';
import deleteIcon from '../images/icon-delete.svg';
import { datas } from './allComponent';

const CartItems = ({ show }) => {
  const allData = useContext(datas);
  let cartedItem = allData.cartItem

  const handleDeleteCart = useCallback( (id) => {
    allData.setCartItem((prevCartItems) => {
      return prevCartItems.filter((eachItem) => {
          return eachItem.id !== id 
      })
  });
},[allData])

  return (
    <div className={`w-[25vw] shadow-[0_0_1px_2px_#E8E8E8] rounded-[10px] bg-white
      mediumDesktop:w-[30vw] largeTablet:w-[35vw] android:w-[80vw] tablet:w-[60vw]
      android:py-2 absolute top-[100%] right-[0%] z-10 transition-all duration-300 ease-in-out 
      ${
        show ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
      <h3 className='border-b-black/20 border-b pl-6 py-4 font-bold  tablet:px-2'>Cart</h3>
      {cartedItem.length === 0 ?  <div className='text-VeryDarkBlue font-bold text-center py-[3rem]'>Your cart is empty.</div> :
       <div className='divide-y max-h-[50vh] android:max-h-[80vh] overflow-auto cartedItem'>
          {cartedItem.map((eachItem, index)=>{
          let discountPrice = eachItem.count  * (eachItem.actualPrice -parseInt((eachItem.actualPrice * eachItem.discount/100)))
          return (
            <div className='px-6 tablet:px-2 py-6  android:py-3 tablet:py-4' key={index}>
              <div className='flex justify-between items-center space-x-6 mb-5 largeTablet:space-x-4 tablet:space-x-2 android:space-x-1'>
                <div className='w-[80px] tablet:w-[50px]'>
                  <img src={eachItem.itemsImage} alt="item" className='w-full object-cover rounded-[10px]' />
                </div>
                <div >
                  <p className='tablet:leading-tight'>Fall Limited Edition Sneakers</p>
                  <span>${ eachItem.actualPrice - (eachItem.actualPrice*(eachItem.discount/100))} x {eachItem.count}</span>
                  <span className='font-bold ml-3 inline-block text-lg largeTablet:text-base tablet:text-base'>{discountPrice}</span>
                </div>
                <button className='p-2' onClick={()=>handleDeleteCart(eachItem.id)}><img src={deleteIcon} alt="delete_icon" /></button>
              </div>
              <button className='bg-DarkOrange text-white rounded-[5px] font-bold  py-2 hover:bg-PaleOrange hover:text-DarkOrange
                transition-all duration-300 ease-linear  hover:ring-1 focus:ring-DarkOrange ring-offset-2 w-full block'>Checkout</button>
              </div>
          )
        })
    }
    </div>
  }
    </div>
  );
}

export default React.memo(CartItems);
