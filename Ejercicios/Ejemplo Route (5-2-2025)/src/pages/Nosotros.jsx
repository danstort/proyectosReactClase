import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Nosotros = () => {

    const url = useLocation();
    const navegar = useNavigate();
    
    function navegacion(){

        navegar('/');
    }

    return (

        <div>
            <h1>Sobre Nosotros</h1>
            <p>Estamos en la página: {url.pathname}</p>
            
            <button onClick={navegacion}>
                Volver a Home

            </button>
        </div>

    )

}

export default Nosotros;