import DetallesLista from "./DetallesLista";

const ElementoLista = (props) => {

    return (

        <li>{props.lista.name}
            

                <DetallesLista {...props}></DetallesLista>
            
            
        </li>



    )
}

export default ElementoLista;