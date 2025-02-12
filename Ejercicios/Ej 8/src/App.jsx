import './App.css';

import frutas from './mocks/mock-frutas';
import ListaFrutas from './components/ListaFrutas';
import NotaForm from './components/NotaForm';
import { useState } from "react";

function App() {


  const [listaFrutas, setListaFrutas] = useState(frutas); // Almaceno la lista de frutas en un estado



  function muestraLista(lista, index) {

    return <ListaFrutas key={index} lista={lista}></ListaFrutas>; //Utilizo commo key el index del array

  }

  function filtrarImportantes(nota) {
    if (mostrarImportantes) {
      return nota.importante; // Filtra solo las notas importantes
    }
    return true; // Si no se filtran importantes, muestra todas
  }
  
  function manejarAccion(nota) {

    setListaNotas([...listaNotas, nota]);

}

  

 
  return (
    <div>

      <h1>Frutas</h1>

      {/*<button onClick={() => setMostrarImportantes(!mostrarImportantes)}>
        {mostrarImportantes ? 'Mostrar todas' : 'Mostrar importantes'}
      </button>*/}
      <ol>
        {listaFrutas.map(muestraLista)}
        {/*listaNotas.filter(filtrarImportantes).map(muestraLista)*/}
      </ol>

      {/*<NotaForm manejarAccion={manejarAccion}></NotaForm>*/}
    </div>
  );
}
export default App;





