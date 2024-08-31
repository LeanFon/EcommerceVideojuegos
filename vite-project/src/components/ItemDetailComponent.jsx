import { useParams } from "react-router-dom"
import { getGame } from "../async-mock"
import { useEffect, useState } from "react"

export default function ItemDetailComponent(){

    const [prod, setProd] = useState({})
    const { id } = useParams()

    useEffect(()=>{
        setProd(getGame(id))
    }, [])

    return(
        <>
        <section className="p-5 mt-5 border">
            <h2>{prod.nombre}</h2>
            <img className="w-25" src={prod.imagen} alt={prod.nombre} />
            <p className="mt-3">{prod.descripcion}</p>
            <h3>{prod.precio}$</h3>
            <h3>Plataforma: {prod.plataforma}</h3>
        </section>
        </>
    )
}