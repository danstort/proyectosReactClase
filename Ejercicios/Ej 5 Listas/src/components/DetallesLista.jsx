
import { useEffect } from "react";
import ElementoIndividual from "./ElementoIndividual";

const DetallesLista = (props) => {

    useEffect(() => {
        console.log( props);
    }, [props]);
    
    function muestraDetalles(detalles) {  

        return(
            
             <ElementoIndividual key={detalles.id} {...detalles}></ElementoIndividual>  
        )
      }

      return (
        <ol>

          {props.props.map(muestraDetalles)}
        </ol>
           
         
            
    );
}

export default DetallesLista;