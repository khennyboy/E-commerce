import { useContext, useEffect, useState } from "react"
import { datas } from "./allComponent"


function useShowCartDetails() {
    const allData = useContext(datas)
    const [itemData , setItemData] = useState('')
    useEffect(()=>{
        let select = allData.currItem
        const data = allData.allItem.find((item)=>{
            return item.itemsImage === select
        })
        setItemData({
            actualPrice : data.actualPrice,
            discount : data.discount,
            count : data.count
        })
    },[allData])

    return itemData
}

export default useShowCartDetails