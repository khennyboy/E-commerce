import { useContext } from "react"
import { datas } from "./allComponent"

const useCartItem = () => {
    let allDatas = useContext(datas)
    let cartItemLength = allDatas.cartItem.length;
    return cartItemLength
}

export default useCartItem