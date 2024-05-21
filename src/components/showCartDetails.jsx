import { useContext, useEffect, useState } from "react"
import { datas } from "./allComponent"
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


function useShowCartDetails(addRef, minusRef, addToCartRef) {
    const allData = useContext(datas)
    const [itemData , setItemData] = useState('')
    useEffect(()=>{
        let select = allData.currItem
        const add = addRef.current
        const minus = minusRef.current
        const addToCart = addToCartRef.current
        const index = allData.allItem.findIndex((item)=>{
            return item.itemsImage === select
        })
        const data  = allData.allItem[index]
        setItemData({
            actualPrice : data.actualPrice,
            discount : data.discount,
            count : data.count
        })
        const handleAddClick = function(){
            allData.setAllItem((prevCartItems) => {
                return prevCartItems.map((item, ind) => {
                    return index === ind ? { ...item, count: item.count + 1 } : item
                })
            });
            const data  = allData.allItem[index]
            setItemData({
                actualPrice : data.actualPrice,
                discount : data.discount,
                count : data.count
            })
         }
         const handleMinusClick = function(){
            let currCount = allData.allItem[index].count
            if(currCount-1 >= 1){
                allData.setAllItem((prevCartItems) => {
                    return prevCartItems.map((item, ind) => {
                        return index === ind ? { ...item, count: item.count - 1 } : item
                    })
                });
                const data  = allData.allItem[index]
                setItemData({
                    id: data.id,
                    actualPrice : data.actualPrice,
                    discount : data.discount,
                    count : data.count
                })
            }
         }
         const addToCartFxn = function(){
            let cartItem = allData.allItem[index]
            allData.setCartItem((prevCartItems) => [...prevCartItems, {
                ...cartItem,
                id: allData.cartItem.length
            }]);
            toast.success('Cart added successfully')
         }
        addToCart.addEventListener('click', addToCartFxn)
        add.addEventListener('click', handleAddClick)
        minus.addEventListener('click', handleMinusClick)
        return(()=>{
            add.removeEventListener('click', handleAddClick)
            minus.removeEventListener('click', handleMinusClick)
            addToCart.removeEventListener('click', addToCartFxn)
        })
    },[allData, addRef, minusRef, addToCartRef])

    return {itemData}
}

export default useShowCartDetails
