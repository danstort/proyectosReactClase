
import { useEffect } from "react";
import ElementoIndividual from "./ElementoIndividual";

const DetallesLista = (props) => {

    useEffect(() => {
        console.log( props);
    }, [props]);
    
    function muestraDetalles(detalles) {  

        return(
            
             <ElementoIndividual {...detalles}></ElementoIndividual>  
        )
      }

      return (
        <ul>
           {props.lista.parts.map(muestraDetalles

           )}
         
             </ul>
    );
}

export default DetallesLista;