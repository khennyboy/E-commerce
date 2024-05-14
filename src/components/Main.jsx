import React, { useContext } from 'react'

import next from '../images/icon-next.svg'
import previous from '../images/icon-previous.svg'
import { datas } from './allComponent'
import Mainright from './Mainright';

const Main = () => {
  let alldata = useContext(datas)
 
  return (
    <div className='flex m-[5rem_auto] w-[90%] justify-between flex-wrap 
      items-center'>
        <div className='relative w-[30%]'>
            <div className='w-full h-[450px] mb-8'>
              <img src={alldata.allItem[0].itemsImage} alt="item" className='
                h-full w-full rounded-[10px] object-cover  cursor-pointer'/>
            </div>
            <div className='flex justify-between w-full gap-[1.5rem] '>
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
        <div id="myModal" className='fixed hidden z-1
        pt-[100px] left-0 top-0 w-full h-full overflow-auto
        bg-black/90'>
          <span className='absolute right-[35px] top-[15px] text-white text-[40px] font-bold 
          transition-all duration-300 ease-linear'>&times;</span>
          <div className='w-[80%] h-[150px] max-w-[700px] mx-auto'>
            <img  alt='itemImage' id="img01" src={alldata.allItem[0].itemsImage} className='w-full h-full object-cover'/>
          </div>
      </div>
    </div>
  )
}

export default Main