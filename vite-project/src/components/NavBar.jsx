
import "./NavBar.css"
import BottonComponent from "./BottonComponent"
import TitleComponent from "./TitleComponent"
import CartWidget from "./CartWidget"
export default function NavBar(){
    return(
        <>
        <nav className="rounded-2 p-5">
            <TitleComponent titulo={"¡Juegos Manía!"}/>
            <div className="navContent d-flex justify-content-around">
                <BottonComponent nombre={"Ps4"}/>
                <BottonComponent nombre={"NS"}/>
                <BottonComponent nombre={"Xbox"}/>
            </div>
            <CartWidget/>
        </nav> 
        </>
    )
}