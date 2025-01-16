import './App.css';
import ListaNotas from './components/ListaNotas';
import notas from './mocks/mock-notas';
import { useState } from 'react';



function App() {

  const [mostrarImportantes, setMostrarImportantes] = useState(false);



  function muestraLista(lista) {

    return <ListaNotas key={lista.id} lista={lista}></ListaNotas>;

  }

  function filtrarImportantes() {

  }

  return (


    <div>

      <h1>Notas</h1>
      <button onClick={() => setMostrarImportantes(!mostrarImportantes)}>
        {mostrarImportantes ? 'Mostrar todas' : 'Mostrar importantes'}
      </button>
      <ul>
        {notas.map(muestraLista)}
      </ul>


    </div>


  );
}
export default App;





