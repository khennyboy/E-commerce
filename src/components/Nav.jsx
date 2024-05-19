import React, { useState, useRef } from 'react';
import avatar from '../images/image-avatar.png';
import open from '../images/icon-menu.svg';
import cartIcon from '../images/icon-cart.svg';
import close from '../images/icon-close.svg';
import useNavEffect from './NavFxn'; 
import CartItems from './CartItems';

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);
  const navContentRef = useRef(null);
  const openMenuRef = useRef(null);
  useNavEffect(openNav, setOpenNav, navContentRef, openMenuRef);

  return (
    <nav className='flex items-center flex-wrap border-b-[3px] border-b-black/20 tablet:p-2 tablet:border-0 '>
      <div className='cursor-pointer hidden tablet:block mr-[1.5rem]' onClick={(e) => {
        e.stopPropagation()
        setOpenNav(prev => !prev)}
      }
         ref={openMenuRef}>
        <img src={open} alt='toggleMenu' />
      </div>

      <h1 className='text-4xl font-bold mr-[4rem] largeTablet:mr-[3rem] largeTablet:text-3xl 
      tablet:flex-grow tablet:text-xl tablet:mr-0'>Sneakers</h1>

      <div className={`flex-grow space-x-[2rem] largeTablet:space-x-[1rem] 
      tablet:fixed tablet:top-0 tablet:h-full tablet:left-0
       tablet:shadow-2xl tablet:z-10 tablet:overflow-hidden 
       tablet:transition-all tablet:duration-300 android:duration-200 tablet:ease-linear tablet:bg-white
       tablet:space-x-0 tablet:*:block tabNav 
        ${openNav ? 'show ' : ''}`} ref={navContentRef}>

        <div className='hidden tablet:block tablet:absolute tablet:top-[2rem] 
        tablet:left-[2rem] android:left-4 cursor-pointer p-2 ' 
         onClick={(e) => {
          e.stopPropagation()
          setOpenNav(prev=>!prev)}}>
          <img src={close} alt='toggleMenu' />
        </div>
        <button className='navBtn tablet:mt-[5rem]' >Collections</button>
        <button className='navBtn tablet:my-3'>Men</button>
        <button className='navBtn tablet:mb-3' >Women</button>
        <button className='navBtn tablet:mb-3 '>About</button>
        <button className='navBtn'>Contact</button>
      </div>

      <div className='flex items-center gap-[3rem] relative android:gap-[1rem]'>
        <img src={cartIcon} alt="cart icon" className='cursor-pointer' />
        <img src={avatar} alt="user" className='mr-[4rem] w-[5rem] object-contain 
        tablet:w-[3rem] tablet:mr-0 largeTablet:mr-0' />
        <CartItems/>
      </div>
    </nav>
  );
};

export default React.memo(Nav);
