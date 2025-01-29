import React from 'react';
function getAllPosts() {
  return fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
    return response.json();})
  .catch(error => console.error(error));
}

export default getAllPosts;