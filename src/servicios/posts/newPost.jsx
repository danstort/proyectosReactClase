export function newPost(Post_) {

    // Llamamos al API REST para insertar el Post. La inserción
    // nos devuelve el Post insertado con el ID que le ha asignado
    // la API REST 
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(Post_),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then(response => {
            
            const data =  response.json();
            return data;                        
        })
}

export default newPost;