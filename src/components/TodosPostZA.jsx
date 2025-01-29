import { useEffect, useState } from 'react';
import { getAllPosts } from '../servicios/posts/getAllPosts';

import AjaxLoader from './AjaxLoader.jsx';

import Post from './Post.jsx'

const TodosPostAZ= () => {

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

  // Función encargada de llamar al componente Post con el post
  // que recibe como parámetro implícito de la función map
  function muestraPost(post) {  

    return <Post  key={post.id} post={post}></Post>;

  }

  function sortZA(p1, p2) {

    if (p1.title>p2.title) return -1;
		if (p1.title<p2.title) return 1;
		return 0;    

  }

    return (

        <div>
            <h1>Todos Post AZ</h1>
            {buscando ? <AjaxLoader></AjaxLoader> 
			          : <ul>{listaPost.toSorted(sortZA).map(muestraPost)}</ul>}
      </div>



    )

}

export default TodosPostAZ;