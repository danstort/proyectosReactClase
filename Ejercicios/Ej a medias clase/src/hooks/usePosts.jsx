import { useState, useEffect } from 'react';

//Servicios
import { getAllPosts } from '../servicios/posts/getAllPosts';


const usePosts = () => {

    // Estado con la lista de post que recuperamos de la REST API
      const [listaPost, setListaPost] = useState([]);
    
      // Estado para controlar si estamos cargando los datos o hemos finalizado
      // de cargarlos
      const [buscando, setBuscando] = useState(false);
    
      function obtenerPosts(){
    
        //Marcamos que estamos buscando los datos
        setBuscando(true);
    
        // Usamos el servicio de obtención de posts que hemos creado
        getAllPosts().then(posts => {
    
            //Cargamos los post en el estado del componente
            setListaPost(posts);
    
            //Indicamos que hemos terminado de cargar los datos
            setBuscando(false);
    
          });                    
        }
    
      // Llamamos a la función de extracción de datos con un useEffect
      // para que solo se ejecute una vez
      useEffect(obtenerPosts, []);

      return {listaPost, buscando}

}
export default usePosts;