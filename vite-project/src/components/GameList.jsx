import { useContext, useEffect, useState } from "react"
import GameCard from "./GameCard"
import { useParams } from "react-router-dom"
import { GameContext } from "./GameContext"
export default function Gamelist(){
    const [juegos, setJuegos] = useState([])
    const[,,,filterGame] = useContext(GameContext)
    const [,,,,getGames] = useContext(GameContext)
    const {category} = useParams()
    useEffect(()=>{
        if(category == "NS" || category == "PS" || category == "PC"){
            setJuegos(filterGame(category))
        } else {
            getGames.then(data => setJuegos(data))
        }
    }, [category])
    return(
        <>
        <section className="d-flex flex-wrap">
            {juegos.map(ga => <GameCard juego={ga}/>)}            
        </section>
        </>
    )
}