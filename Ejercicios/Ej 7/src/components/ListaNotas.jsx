

const ListaNotas = (props) => {


    

    return (

        <li>{props.lista.contenido} <span style={{ color: 'red' }}>
        {props.lista.importante ? 'Importante' : ''}
    </span>
    <br></br>
          <small> {props.lista.fecha}</small>  
           
        </li> 

        



    )
}

export default ListaNotas;