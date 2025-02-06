import { useEffect, useState } from "react";
import { getGifs } from "../servicios/getGifs";

// CUSTOM HOOK. Recibe un keyword y devuelve la información (un array) de todos los GIFS que
// cumplen dicho keyword junto  con un boleano que nos indica cuando estamos buscando
// la información (true) y cuando no la estamos buscando (false)

const useGifs = ({keyword} = {keyword:null}) =>  {
    
    // Estado con la lista de gifs que recuperamos de la REST API
    const [listaGifs, setListaGifs] = useState([]);

    // Estado para controlar si estamos cargando los datos o hemos finalizado
    // de cargarlos
    const [buscando, setBuscando] = useState(false);

    function obtenerGifs(){

        //Marcamos que estamos buscando los datos
        setBuscando(true);

        const keywordAUsar = keyword ? keyword : localStorage.getItem("lastKeyword");

        // Usamos el servicio de obtención de posts que hemos creado
        getGifs(keywordAUsar).then(gifs => {

            //Cargamos los post en el estado del componente
            setListaGifs(gifs);

            //Indicamos que hemos terminado de cargar los datos
            setBuscando(false);

            localStorage.setItem("lastKeyword", keywordAUsar);
        });                    
    }

    // Llamamos a la función de extracción de datos con un useEffect
    // para que solo se ejecute una vez
    useEffect(obtenerGifs, [keyword]);

    return {buscando, listaGifs}
}
export default useGifs;