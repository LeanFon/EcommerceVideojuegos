import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "./CartContext"

export default function CheckoutComponent(){
    const [nombre, setNombre] = useState()
    const [mail, setMail] = useState()
    const [,,,clear] = useContext(CartContext)

    const agregarNombre = (e) =>{
        setNombre(e.target.value)
    }
    const agregarEmail = (e) =>{
        setMail(e.target.value)
    }

    const comprarClick= () =>{
        if (nombre == undefined || mail == undefined){
            alert("Los datos que ingresaste no son validos")
        } else {
            alert("Gracias " + nombre + " por confiar en nuestros servicios")
            clear()
        }   
    }

    return(
        <>
            <form className="w-100">
                <h3>Para finalizar la compra necesitamos los siguientes datos:</h3>
                <div className="col-12">
                    <input type="text" placeholder="Tu nombre" required className="m-5 p-2" onChange={agregarNombre}/>
                </div>
                <div className="col-12">
                    <input type="email" name="" id="" placeholder="Tu email" required className="p-2" onChange={agregarEmail}/>
                </div>
                <Link to={"/"}><button className="m-5" onClick={comprarClick}>Finalizar compra</button> </Link>
            </form>
        </>
    )
}