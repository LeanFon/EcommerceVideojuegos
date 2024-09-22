import { useParams } from "react-router-dom"
//import { getGame } from "../components/GameContext"
import { useContext, useEffect, useState } from "react"
import { CartContext } from "./CartContext"
import { GameContext } from "./GameContext"

export default function ItemDetailComponent(){
    const[,,getGame] = useContext(GameContext)

    const [contador, setContador] = useState(1)

    const restar = () =>{
        if(contador > 1){
            setContador(c => c - 1)
        }
    }

    const sumar = () =>{
        setContador(c => c + 1)
    }

    const [prod, setProd] = useState({})
    const { id } = useParams()

    useEffect(()=>{
        setProd(getGame(id))
    }, [])

    const [cart] = useContext(CartContext)
    const [,,addItem] = useContext(CartContext)
    const [,,,,,addUp] = useContext(CartContext)
    let aprob = true

    let resultado = cart.find((gameId)=>{
        return gameId.id == prod.id
    })

    if (resultado == undefined){
        aprob = false
    } 

    const handleClick = () =>{
            addItem(prod, contador)
            let resultar = prod.precio * contador
            addUp(resultar)
    }

    return(
        <>
        <section className="p-5 mt-5 border">
            <h2>{prod.nombre}</h2>
            <img className="w-25" src={prod.imagen} alt={prod.nombre} />
            <p className="mt-3">{prod.descripcion}</p>
            <h3>{prod.precio}$</h3>
            <h3>Plataforma: {prod.plataforma}</h3>
            <h2>{contador}</h2>
            <div className="d-flex justify-content-evenly">
                <button onClick={restar}>-</button>
                <button onClick={sumar}>+</button>
            </div>
            {aprob? <p>El juego ya se encuentra en el carrito</p> : <button onClick={handleClick}>Comprar</button>}
        </section>
        </>
    )
}