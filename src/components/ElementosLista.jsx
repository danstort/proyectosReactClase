import DetallesLista from "./DetallesLista";

const ElementoLista = (props) => {

    return (

        <li>{props.lista.name}
            <ul>

                <DetallesLista ></DetallesLista>
            </ul>
            
        </li>



    )
}

export default ElementoLista;