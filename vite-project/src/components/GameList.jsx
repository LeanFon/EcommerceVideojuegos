import { getGames, filterGame } from "../async-mock"
import { useEffect, useState } from "react"
import GameCard from "./GameCard"
import { useParams } from "react-router-dom"
export default function Gamelist(){

    const [games, setGames] = useState([])
    const {category} = useParams()

    useEffect(()=>{
        if(category == "NS" || category == "PS" || category == "PC"){
            setGames(filterGame(category))
        } else {
            getGames.then(data => setGames(data))
        }
    }, [category])

    return(
        <>
        <section className="d-flex flex-wrap">
            {games.map(game => <GameCard juego={game}/>)}            
        </section>
        </>
    )
}