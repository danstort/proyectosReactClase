import React, { useState } from 'react';
import { useEffect } from 'react';

//Servicios
import getAllPosts from '../servicios/posts/getAllPosts';
import newPost from '../servicios/posts/newPost';


//Componentes
import Post from './Post';
import PostForm from './PostForm';


const ListaPost = () => {

    const [listaPost, setListaPost] = useState([]);

    function obtenerPost() {

        getAllPosts().then (posts => {
            setListaPost(posts);
        }
        )
    }

    function muestraPost(post) {
        return <Post key={post.id} post={post}></Post>
    }


    useEffect(obtenerPost, []);


    function manejarAccion(post) {

        console.log("valor componente hijo ", post, " lo añadimos a la lista");
    
        newPost(post).then(post => {
    
          console.log(post);
          
          // Añadimos el post a la lista
          setListaPost([...listaPost, post]);
    
        });
        
      } 

    return (
        
        <div>
      <div id="divPost">
        <h1>Post</h1>
        <ul>                        
        {listaPost.map(muestraPost)}
        </ul>
      </div>
      <div id="divForm">
        <PostForm manejarAccion={manejarAccion}>
        </PostForm>        
      </div>


    </div>
    )


}

export default ListaPost;