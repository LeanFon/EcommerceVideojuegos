import { Link } from "react-router-dom"
import "./NavBar.css"
import TitleComponent from "./TitleComponent"
import CartWidget from "./CartWidget"
import { CartContext } from "./CartContext"
import { useContext } from "react"
export default function NavBar(){
    const [cart] = useContext(CartContext)
    let es = true
    
    if(cart.length == 0){
        es  = false
    }

    return(
        <>
        <nav className="rounded-2 p-5">
            <TitleComponent titulo={"¡Juegos Manía!"}/>
            <div className="navContent d-flex justify-content-around">
                <Link to={`/category/PS`}><button>Playstation</button></Link>
                <Link to={`/category/NS`}><button>NintendoSwitch</button></Link>
                <Link to={`/category/PC`}><button>Computadora</button></Link>
            </div>
            {es? <CartWidget/> : <h3>Añada un item al carrito</h3> }
        </nav> 
        </>
        
    )
}