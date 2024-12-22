import React, { useState, useRef } from 'react';
import avatar from '../images/image-avatar.png';
import open from '../images/icon-menu.svg';
import cartIcon from '../images/icon-cart.svg';
import close from '../images/icon-close.svg';
import useNavEffect from './NavFxn'; 
import CartItems from './CartItems';
import { Outlet } from 'react-router-dom';
import useCartItem from './useCartItem';

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);
  const navContentRef = useRef(null);
  const openMenuRef = useRef(null);
  const [showCart, setShowCart] = useState(false);

  useNavEffect(openNav, setOpenNav, navContentRef, openMenuRef);
  const cartItemLength = useCartItem();

  return (
   <>
      <nav className='flex items-center flex-wrap border-b-[3px] border-b-black/20 tablet:p-2 tablet:border-0 '>
        <div 
          className='cursor-pointer hidden tablet:block mr-[1.5rem]' 
          onClick={(e) => {
            e.stopPropagation()
            setOpenNav(prev => !prev);
          }}
          ref={openMenuRef}
        >
          <img src={open} alt='toggleMenu' />
        </div>

        <h1 className='text-4xl font-bold mr-[4rem] largeTablet:mr-[3rem] largeTablet:text-3xl 
          tablet:flex-grow tablet:text-xl tablet:mr-0'>
          Sneakers
        </h1>

        <div className={`flex-grow space-x-[2rem] largeTablet:space-x-[1rem] 
          tablet:fixed tablet:top-0 tablet:h-full tablet:left-0
          tablet:shadow-2xl tablet:z-10 tablet:overflow-hidden 
          tablet:transition-all tablet:duration-300 android:duration-200 tablet:ease-linear tablet:bg-white
          tablet:space-x-0 tablet:block tablet:*:block
          ${openNav ? 'w-[50vw] android:w-[80vw]' : 'w-[0]'}`} ref={navContentRef}
        >
          <div 
            className='hidden tablet:block tablet:absolute tablet:top-[2rem] 
            tablet:left-[2rem] android:left-4 cursor-pointer p-2  ' 
            onClick={(e) => {
              e.stopPropagation();
              setOpenNav(prev => !prev);
            }}
          >
            <img src={close} alt='toggleMenu' />
          </div>
          <button className='navBtn tablet:mt-[5rem]'>Collections</button>
          <button className='navBtn tablet:my-3'>Men</button>
          <button className='navBtn tablet:mb-3'>Women</button>
          <button className='navBtn tablet:mb-3'>About</button>
          <button className='navBtn'>Contact</button>
        </div>

        <div className='flex items-center gap-[3rem] relative android:gap-[1rem]'>
          <div className='relative p-3'>  {/*this is where the cart stuff begin*/ }
          <img 
            src={cartIcon} 
            alt="cart icon" 
            className='cursor-pointer' 
            onClick={() => setShowCart(prev => !prev)} 
          />
          {cartItemLength!==0 && <span className='absolute rounded-[50%] h-4 w-4 flex justify-center items-center
           right-2 top-1 text-white bg-DarkOrange text-[10px] p-2'>{cartItemLength}</span> }
          </div>
          <img 
            src={avatar} 
            alt="user" 
            className='mr-[4rem] w-[5rem] object-contain 
            tablet:w-[3rem] tablet:mr-0 largeTablet:mr-0' 
          />
          <CartItems show={showCart} />
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default React.memo(Nav);
