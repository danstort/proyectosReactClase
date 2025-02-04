import React from 'react';
export function getAllPosts() {
  return fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
    return response.json();})
  .catch(error => console.error(error));
}

