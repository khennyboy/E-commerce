import React,{useState} from 'react'
import Main from './Main'
import Nav from './Nav'
import item1 from '../images/image-product-1.jpg'
import item2 from '../images/image-product-2.jpg'
import item3 from '../images/image-product-3.jpg'
import item4 from '../images/image-product-4.jpg'
import { ToastContainer } from 'react-toastify';


let allItems = [
    {
        id : 1,
        itemsImage: item1,
        actualPrice: 1200,
        discount:20,
        count: 1
    },
    {
        id:2,
        itemsImage: item2,
        actualPrice:1500,
        discount:30,
        count: 1
    },
    {
        id: 3,
        itemsImage: item3,
        actualPrice: 1600,
        discount: 40,
        count: 1
    },
    {
        id: 4,
        itemsImage: item4,
        actualPrice:2000,
        discount:10,
        count: 1
    },
   
]
export const datas = React.createContext()
const AllComponent = () => {
    const [cartItem, setCartItem] = useState([])
    const [allItem, setAllItem] = useState(allItems)
    const [currItem, setCurrItem] = useState(allItem[0].itemsImage)
   
  return (
    <datas.Provider value={{cartItem, allItem, setAllItem, setCartItem, currItem, setCurrItem}}>
        <ToastContainer />
        <Nav/>
        <Main/>
    </datas.Provider>
  )
}

export default AllComponent

