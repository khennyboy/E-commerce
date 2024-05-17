import React, {  useState } from 'react';
import avatar from '../images/image-avatar.png';
import open from '../images/icon-menu.svg';
import cartIcon from '../images/icon-cart.svg';
import deleteIcon from '../images/icon-delete.svg';
import item1 from '../images/image-product-1.jpg';
import close from '../images/icon-close.svg'

const Nav = () => {
  const [openNav, setOpenNav] = useState(false)

 
  // const resizeWindow = useCallback(()=>{
  //   if(openNav){
  //     setOpenNav(prev=>!prev)
  //   }
  // },[openNav])

  // useEffect(()=>{
  //   window.addEventListener('resize', resizeWindow)
  // },[])

  return (
    <nav className='flex items-center flex-wrap border-b-[3px] border-b-black/20 tablet:p-2
    tablet:border-0 '>
      <div className='cursor-pointer  hidden tablet:block mr-[1.5rem]' onClick={()=>setOpenNav(prev=>!prev)} id='openNav'>
        <img src={open} alt='toggleMenu' />
      </div> 

      <h1 className='text-4xl font-bold mr-[4rem] largeTablet:mr-[3rem] largeTablet:text-3xl 
      tablet:flex-grow tablet:text-xl tablet:mr-0'>Sneakers</h1>

      <div className={`flex-grow space-x-[2rem] largeTablet:space-x-[1rem] 
      tablet:fixed tablet:top-0  tablet:h-full tablet:left-0
       tablet:shadow-2xl  tablet:z-10 tablet:overflow-hidden 
       tablet:transition-all tablet:duration-300 tablet:ease-linear  tablet:bg-white
       tablet:space-x-0 tablet:*:block tabNav tablet:*:pl-[4rem] android:*:pl-4 
        ${openNav ? 'show ':'' }`} id='navContent'>

        <div className='hidden tablet:block tablet:absolute tablet:top-[2rem] 
        tablet:left-0 android:left-4 cursor-pointer p-2 pl-0' 
         id='closeIcon' onClick={()=>setOpenNav(prev=>!prev)}>
          <img src={close} alt='toggleMenu' />
        </div>
        <button className='navBtn tablet:mt-[5rem]'>Collections</button>
        <button className='navBtn '>Men</button>
        <button className='navBtn '>Women</button>
        <button className='navBtn '>About</button>
        <button className='navBtn '>Contact</button>
      </div>

      <div className='flex items-center gap-[3rem] relative android:gap-[1rem]'>
        <img src={cartIcon} alt="cart icon" className='cursor-pointer  ' />
        <img src={avatar} alt="user" className='mr-[4rem] w-[5rem] object-contain 
        tablet:w-[3rem] tablet:mr-0 largeTablet:mr-0 ' />
        <div className='absolute top-[100%] right-[0%] w-[20vw] shadow-[0_0_2px_1px_#E8E8E8]
         rounded-[10px] py-[1.5rem]  hidden flex-col bg-white z-10 
         mediumDesktop:w-[30vw] largeTablet:w-[35vw]  android:w-[80vw] tablet:w-[50vw]
         android:py-2 '>
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
           transition-all duration-300 ease-linear tablet:mx-2'>Checkout</button>
        </div>
      </div>

    </nav>
  )
}

export default Nav;
