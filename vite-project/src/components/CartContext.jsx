import { createContext, useState } from "react"

export const CartContext = createContext(false)

export default function CartProvider({children}){
    const [cart, setCart] = useState([])

    const addItem = (item, quantity) =>{
            item.cantidad = quantity
            setCart([...cart, item])
    }

    const clear = () =>{
        setCart([])
    }

    const removeItem = (itemId) =>{
        return cart.filter(game => game.id != itemId)
    }

    const buyItem = () =>{
        console.log(cart)
    }

    return(
    <CartContext.Provider value={[cart, setCart, addItem, clear, removeItem, buyItem]}>
        {children}
    </CartContext.Provider>
    )
}