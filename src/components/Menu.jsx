import "./style.css";
import {Link } from "react-router-dom";

const Menu = () => {

    return (

        <ul className="menu">
            <li><Link to="/">Home </Link></li>
            <li><Link to="/murcia">Murcia</Link></li>
            <li><Link to="/cartagena">Cartagena</Link></li>
            <li><Link to="/lorca">Lorca</Link></li>
            <li><Link to="/caravaca">Caravaca</Link></li>
        </ul>
    )

}
export default Menu;