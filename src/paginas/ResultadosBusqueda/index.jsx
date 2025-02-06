import ListaGifs from "../../componentes/ListaGifs";
//import { getGifs } from "../../servicios/getGifs";
//import { useState, useEffect } from "react";
import imagenLoader from '../../img/ajax-loader.gif';
import AjaxLoader  from "../../componentes/AjaxLoader";
import useGifs from "../../hooks/useGifs";

const ResultadosBusqueda = (props) => {

    const {buscando, listaGifs} = useGifs(props.params);

    //console.log(props);
    return (
        <div className="Home">
            {buscando 
                ? <AjaxLoader loader={imagenLoader}></AjaxLoader> 
                : <ListaGifs listaGifs={listaGifs}></ListaGifs>}
        </div>
    )
}

export default ResultadosBusqueda;