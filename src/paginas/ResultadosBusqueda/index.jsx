import ListaGifs from "../../componentes/ListaGifs";
//import { getGifs } from "../../servicios/getGifs";
//import { useState, useEffect } from "react";
import imagenLoader from '../../img/ajax-loader.gif';
import AjaxLoader  from "../../componentes/AjaxLoader";
import useGifs from "../../hooks/useGifs";

const ResultadosBusqueda = (props) => {

    const {buscando, listaGifs, setPage} = useGifs(props.params);

    //console.log(props);
    function obtenerSiguientePagina(){
        setPage(prevPage => prevPage + 1);
    }

    return (
        <div className="Home">
            {buscando 
                ? <AjaxLoader loader={imagenLoader}></AjaxLoader> 
                : <ListaGifs listaGifs={listaGifs}></ListaGifs>}
                <button className="r-botton"
                 onClick={obtenerSiguientePagina}>Siguiente Página</button>
        </div>
    )
}

export default ResultadosBusqueda;