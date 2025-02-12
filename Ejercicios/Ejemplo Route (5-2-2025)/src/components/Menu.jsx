import { Link } from "react-router-dom";

const Menu = () => {

    return (

        <div>

            <Link to="/">Home </Link>

            <Link to="/users/1">Bienvenida </Link>

            <Link to="/inbox">Contador </Link>

            <Link to="/about">Nosotros </Link>

        </div>
        
    )
}

export default Menu;