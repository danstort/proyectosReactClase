import './App.css';

import notas from './mocks/mock-notas';
import ListaNotas from './components/ListaNotas';
import NotaForm from './components/NotaForm';
import { useState } from "react";

function App() {

  const [mostrarImportantes, setMostrarImportantes] = useState(false);

  const [listaNotas, setListaNotas] = useState(notas);



  function muestraLista(lista) {

    return <ListaNotas key={lista.id} lista={lista}></ListaNotas>;

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

      <h1>Notas</h1>

      <button onClick={() => setMostrarImportantes(!mostrarImportantes)}>
        {mostrarImportantes ? 'Mostrar todas' : 'Mostrar importantes'}
      </button>
      <ul>
        {listaNotas.filter(filtrarImportantes).map(muestraLista)}
      </ul>

      <NotaForm manejarAccion={manejarAccion}></NotaForm>
    </div>
  );
}
export default App;





