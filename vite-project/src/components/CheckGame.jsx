import { useContext } from "react"
import { CartContext } from "./CartContext"

export default function CheckGame({juego}){
    const [,setCart] = useContext(CartContext)
    const [,,,,removeItem] = useContext(CartContext)
    const handleClick = () =>{
        setCart(removeItem(juego.id))
    }

    return(
        <>
        <div className="mb-5">
        <img className="w-25" src={juego.imagen} alt={juego.nombre} />
        <h3>{juego.nombre}</h3>
        <h3>{juego.plataforma}</h3>
        <h3>{juego.precio}$</h3>
        <p>Cantidad de unidades: {juego.cantidad}</p>
        <button className="bg-danger" onClick={handleClick}>Eliminar</button>
        </div>
        </>
    )
} 