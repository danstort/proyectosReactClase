

const ListaNotas = (props) => {


    

    return (

        <li>{props.lista.contenido} -  {props.lista.importante ? 'Importante' : ''}
            
           
        </li> 

        



    )
}

export default ListaNotas;