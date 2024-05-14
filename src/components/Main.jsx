import React, { useContext } from 'react'

import next from '../images/icon-next.svg'
import previous from '../images/icon-previous.svg'
import { datas } from './allComponent'
import Mainright from './Mainright';

const Main = () => {
  let alldata = useContext(datas)
 
  return (
    <div className='flex'>
        <div className='relative'>
            <div>
              <img src={alldata.allItem[0].itemsImage} alt="item" />
            </div>
            <div>
                {
                  alldata.allItem.map((each)=>{
                    return (
                      <img src={each.itemsImage} alt ='itemImage' key={each.id}/>
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