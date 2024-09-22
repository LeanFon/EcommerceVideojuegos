import { useContext, useState } from "react"
import { CartContext } from "./CartContext"
import CheckGame from "./CheckGame"
import { Link } from "react-router-dom"

export default function CartView(){
    const [cart] = useContext(CartContext)
    const [,,,clear] = useContext(CartContext)
    const [,,,,buyItem] = useContext(CartContext)
  
    const handleClick = () =>{
        clear()
    }
   
    const cantidad = cart.map(juegos=> juegos.cantidad)
    const precio = cart.map(juegos=> juegos.precio)
    let suma = 0
    for (let i = 0; i < precio.length; i++) {
        suma +=precio[i] * cantidad[i]
    }
    return(
        <>
            
            
            <div className="d-flex justify-content-around m-3">
            {cart.length === 0? console.log("no hay") : <Link to={`/checkout/`}><button className="bg-success">Comprar</button></Link>}
            {cart.length === 0? console.log("no hay") : <button onClick={handleClick}>Limpiar carrito</button>}
            </div>
            {cart.length === 0? <h2>No hay ningun item en el carrito</h2> : <h2>Total a pagar: {suma}$</h2>}
            <section className="m-4">
                {cart.map(juego => <CheckGame juego={juego}/>)}
            </section>
        </>
    )
}