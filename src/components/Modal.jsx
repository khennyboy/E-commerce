import React from 'react'
import { createPortal } from 'react-dom'

const Modal = ({infos}) => {
  return createPortal(<div id="myModal" className={`fixed z-1 
    py-[3rem] left-0 top-0 w-full h-full overflow-auto
    bg-black/90 group ${infos.showPrevItem ? 'block': 'hidden'}`}>
        <span className={`absolute right-12 top-8 text-white text-[40px] font-bold 
        cursor-pointer tablet:top-4 android:right-8`}  onClick={()=>infos.SetshowPrevItem(false)}>&times;</span>
        <div className='w-[80%] max-w-[700px] mx-auto tablet:h-[80%] android:h-[90%] tablet:mt-8 android:w-[95%] 
            animate-zoom'>
        <img  alt='itemImage' id="img01" src={infos.imageSrc} className='w-full h-full object-cover'/>
        </div>
    </div>, document.body)
}

export default Modal