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
            <div className='w-full'>
              <img src={alldata.allItem[0].itemsImage} alt="item" className='
                h-[450px] w-full rounded-[10px] object-cover mb-8 cursor-pointer'/>
            </div>
            <div className='flex justify-between w-full gap-[1.5rem] '>
                {
                  alldata.allItem.map((each)=>{
                    return (
                      <img src={each.itemsImage} alt ='itemImage' key={each.id} className='
                      imageItem'/>
                    )
                  })
                }
                <img src={next} alt="nextIcon" className='absolute hidden' />
                <img src={previous} alt='prevIcon' className='absolute hidden'/>
            </div>
        </div>
        <Mainright/>
        <div id="myModal" className='fixed hidden'>
          <span>&times;</span>
          <img  alt='itemImage' id="img01"/>
          <div id="caption"></div>
      </div>
    </div>
  )
}

export default Main