import './App.css';
import Coche from './components/Coche';
import CocheForm from './components/CocheForm';
import losCoches from './mock-coches';
import notas from './mocks/mock-notas';
import ListaNotas from './components/ListaNotas';
import { useState } from "react";

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
  const [listaCoches, setListaCoches] = useState(losCoches);

  

  // Esta función se envía al componente hijo como prop
  function manejarAccion(coche) {

    console.log("valor componetne hijo ", coche, " lo añadimos a la lista");

    // Añadimos el coche a la lista de coches
    setListaCoches([...listaCoches, coche]);

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

      {/*Enviamos al componente hijo la función mamnejarAccion como prop*/}
      <CocheForm manejarAccion={manejarAccion}></CocheForm>
    </div>
  );
}
export default App;





