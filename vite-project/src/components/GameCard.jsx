import { Link } from "react-router-dom"
export default function GameCard({juego}){
    return(
        <>
        <div className="border w-25 m-5">
            <img className="w-100 h-50" src={juego.imagen} alt="" />
            <h3>{juego.nombre}</h3>
            <p>{juego.precio}$</p>
            <p>Plataforma:{juego.plataforma}</p>
            <button><Link to={`/item/${juego.id}`}>Ver mas información</Link></button>
        </div>
        </>
    )
}