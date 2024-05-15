import React, { useContext } from 'react'

import next from '../images/icon-next.svg'
import previous from '../images/icon-previous.svg'
import { datas } from './allComponent'
import Mainright from './Mainright';

const Main = () => {
  let alldata = useContext(datas)
 
  return (
    <div className='flex m-[5rem_auto] w-[90%] justify-between flex-wrap 
      items-center mediumDesktop:w-full largeTablet:w-full smallAndroid:w-full
      tablet:w-full tablet:flex-col tablet:m-0 android:gap-4'>
        <div className='relative w-[30%] mediumDesktop:w-[35%] largeTablet:w-[40%] 
        tablet:w-full'>
            <div className='w-full h-[450px] mb-8 mediumDesktop:h-[400px]
            android:h-[300px] android:mb-0'>
              <img src={alldata.allItem[0].itemsImage} alt="item" className='
                h-full w-full rounded-[10px] object-cover  cursor-pointer'/>
            </div>
            <div className='flex justify-between w-full gap-[1.5rem] tablet:hidden'>
                {
                  alldata.allItem.map((each)=>{
                    return (
                      <div className='w-[6rem]' key={each.id}>
                        <img src={each.itemsImage} alt ='itemImage'  className='
                        imageItem inline-block'/>
                      </div>
                    )
                  })
                }
                <img src={next} alt="nextIcon" className='absolute hidden' />
                <img src={previous} alt='prevIcon' className='absolute hidden'/>
            </div>
        </div>
        <Mainright/>
        <div id="myModal" className='fixed z-1 hidden
        py-[3rem] left-0 top-0 w-full h-full overflow-auto
        bg-black/90 '>
          <span className='absolute right-12 top-8 text-white text-[40px] font-bold 
          transition-all duration-300 ease-linear cursor-pointer tablet:top-4 android:right-8'>&times;</span>
          <div className='w-[80%] max-w-[700px] mx-auto tablet:h-[80%] android:h-[90%] tablet:mt-8 android:w-[95%]'>
            <img  alt='itemImage' id="img01" src={alldata.allItem[0].itemsImage} className='w-full h-full object-cover'/>
          </div>
      </div>
    </div>
  )
}

export default Main