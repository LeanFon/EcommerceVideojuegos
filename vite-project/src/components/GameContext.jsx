import {collection, getDocs, getFirestore} from "firebase/firestore"
import { createContext, useEffect, useState } from "react"

export const GameContext = createContext(false)

export default function GameProvider ({children}){
    const [products, setProducts] = useState([])

    useEffect(()=>{
        const db = getFirestore()
        const productsCollection = collection(db,"juegos")
        getDocs(productsCollection).then((snapshot)=>{
            if (snapshot.size===0){
                console.log("no hay productos")
            }
            setProducts(snapshot.docs.map((doc)=>({id: doc.id, ...doc.data()})))
        })
       
    }, [])
   

    const getGames = new Promise((resolve) => {
        resolve(products)
    })
    const getGame = (id) =>{
        return products.find((game) => game.id == id)
    }
    function filterGame (category){
        return products.filter((juego => juego.plataforma == category))
    }
    return (
        <GameContext.Provider value={[products, setProducts, getGame, filterGame, getGames]}>
            {children}
        </GameContext.Provider>
    )
}