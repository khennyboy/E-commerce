import React, { useContext, useRef, useState } from 'react'

import next from '../images/icon-next.svg'
import previous from '../images/icon-previous.svg'
import { datas } from './allComponent'
import Mainright from './Mainright';
import ImageFxn from './ImageFxn';


const Main = () => {
  let alldata = useContext(datas)
  console.log(alldata)
  const [showPrevItem, SetshowPrevItem] = useState(false)
  const item = useRef(null)
  const previousIcon= useRef(null)
  const nextIcon = useRef(null)
  const addOpac = useRef(null)

  const Results = ImageFxn(item, previousIcon, nextIcon, addOpac)

  let imageSrc = Results.selectedItem || Results.prevNextImage || alldata.allItem[0].itemsImage

  return (
    <div className='flex m-[5rem_auto] w-[90%] justify-between flex-wrap 
      items-center mediumDesktop:w-full largeTablet:w-full smallAndroid:w-full
      tablet:w-full tablet:flex-col tablet:m-0 android:gap-4'>
        <div className='relative w-[30%] mediumDesktop:w-[35%] largeTablet:w-[40%] 
        tablet:w-full'>
            <div className='w-full h-[450px] mb-8 mediumDesktop:h-[400px] 
            android:h-[300px] android:mb-' onClick={()=>SetshowPrevItem(!showPrevItem)}>
              <img src={imageSrc} alt="item" ref={addOpac} className='
                h-full w-full rounded-[10px] object-cover  cursor-pointer'/>
            </div>
            <div className='flex justify-between w-full gap-[1.5rem] tablet:hidden' ref={item}>
                {
                  alldata.allItem.map((each, index)=>{
                    return (
                      <div className='w-[6rem]' key={each.id} >
                        <img src={each.itemsImage} alt ='itemImage'  className={`
                        imageItem ${index===0 ? 'border-DarkOrange border-4 box-content opacity-100': ''}`}/>
                      </div>
                    )
                  })
                }
            </div>
            <div className='changeImage left-2' ref={previousIcon}>
              <img src={previous} alt="prevIcon" />
            </div>
            <div className='changeImage right-2' ref={nextIcon}>
              <img src={next} alt="nextIcon" />
            </div>
            <div className='absolute top-1 right-2 bg-white/50 rounded-[10px] px-2 py-1 tracking-[3px] hidden tablet:block'>
              {Results.currIndex.current+1}/{Results.totalImage+1}
            </div>
        </div>
        <Mainright/>

        <div id="myModal" className={`fixed z-1 
        py-[3rem] left-0 top-0 w-full h-full overflow-auto
        bg-black/90 group ${showPrevItem ? 'block': 'hidden'}`}>
          <span className={`absolute right-12 top-8 text-white text-[40px] font-bold 
           cursor-pointer tablet:top-4 android:right-8`}  onClick={()=>SetshowPrevItem(false)}>&times;</span>
          <div className='w-[80%] max-w-[700px] mx-auto tablet:h-[80%] android:h-[90%] tablet:mt-8 android:w-[95%] 
              animate-zoom'>
            <img  alt='itemImage' id="img01" src={imageSrc} className='w-full h-full object-cover'/>
          </div>
      </div>

    </div>
  )
}

export default Main;