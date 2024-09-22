import { useContext } from "react"
import { CartContext } from "./CartContext"
import { Link } from "react-router-dom"

export default function CartWidget(){

    const [cart] = useContext(CartContext)

    return(
        <>
        <Link to={`/cart/`} style={{ textDecoration: 'none' }}><h2>🛒{cart.length}</h2></Link>
        </>
    )
}