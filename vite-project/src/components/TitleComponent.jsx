import { Link } from "react-router-dom"
export default function TitleComponent({titulo}){
    return(
        <>
        <Link to={"/"}><h1 className="text-warning gap" style={{ textDecoration: 'none' }}>{titulo}</h1></Link>
        </>
    )
}

