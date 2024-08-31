import Gamelist from "./GameList"
export default function ItemListContainer({greeting}){
    return(
        <>
            <h2>{greeting}</h2>
                <Gamelist/>  
        </>
    )
}