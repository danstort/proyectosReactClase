import DetallesLista from "./DetallesLista";

const ElementoLista = (props) => {


    const totalEjercicios = props.lista.parts.reduce((total, part) => total + part.exercises, 0);

    return (

        <li>{props.lista.name}
            
            <ol>

                <DetallesLista key={props.id} props={props.lista.parts}></DetallesLista>
            </ol>
                
            <p>Total de ejercicios en el curso {totalEjercicios}</p>
            
        </li>



    )
}

export default ElementoLista;