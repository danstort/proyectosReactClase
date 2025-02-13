import './App.css';

import frutas from './mocks/mock-frutas';
import ListaFrutas from './components/ListaFrutas';
import FrutasForm from './components/FrutasForm';
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

      <div>
        <h1>Frutas</h1>

      {/*<button onClick={() => setMostrarImportantes(!mostrarImportantes)}>
        {mostrarImportantes ? 'Mostrar todas' : 'Mostrar importantes'}
      </button>*/}
      <ol>
        {listaFrutas.map(muestraLista)}
        {/*listaNotas.filter(filtrarImportantes).map(muestraLista)*/}
      </ol>
      </div>

      <div>
        <FrutasForm></FrutasForm>
      </div>
      
      
      {/*<NotaForm manejarAccion={manejarAccion}></NotaForm>*/}
    </div>
  );
}
export default App;





