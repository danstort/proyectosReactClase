import React, { useState } from 'react';
import { useEffect } from 'react';

//Servicios
import getAllPosts from '../servicios/posts/getAllPosts';

//Componentes
import Post from './Post';


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

    return (
        <div>
            <h1>Post</h1>
            <ul>
                {listaPost.map(muestraPost)}
            </ul>


        </div>
    )


}

export default ListaPost;