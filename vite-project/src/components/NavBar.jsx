import { Link } from "react-router-dom"
import "./NavBar.css"
import TitleComponent from "./TitleComponent"
import CartWidget from "./CartWidget"
export default function NavBar(){
    return(
        <>
        <nav className="rounded-2 p-5">
            <TitleComponent titulo={"¡Juegos Manía!"}/>
            <div className="navContent d-flex justify-content-around">
                <Link to={`/category/PS`}><button>Playstation</button></Link>
                <Link to={`/category/NS`}><button>NintendoSwitch</button></Link>
                <Link to={`/category/PC`}><button>Computadora</button></Link>
            </div>
            <CartWidget/>
        </nav> 
        </>
    )
}