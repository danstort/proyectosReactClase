import './App.css';
import ListaNotas from './components/ListaNotas';
import notas from './mocks/mock-notas';
import { useState } from 'react';



function App() {

  const [mostrarImportantes, setMostrarImportantes] = useState(false);



  function muestraLista(lista) {

    return <ListaNotas key={lista.id} lista={lista}></ListaNotas>;

  }

  function filtrarImportantes(nota) {
    if (mostrarImportantes) {
      return nota.importante; // Filtra solo las notas importantes
    }
    return true; // Si no se filtran importantes, muestra todas
  }

  return (


    <div>

      <h1>Notas</h1>
      <button onClick={() => setMostrarImportantes(!mostrarImportantes)}>
        {mostrarImportantes ? 'Mostrar todas' : 'Mostrar importantes'}
      </button>
      <ul>
        {notas.filter(filtrarImportantes).map(muestraLista)}
      </ul>


    </div>


  );
}
export default App;





