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

  
  
  function manejarInserccion({añadir}) {

    setListaFrutas([...listaFrutas, añadir]); // Agrego una nueva fruta a la lista

  }

  

 
  return (
    <div>

      <div>
        <h1>Frutas</h1>

      <ol>
        {listaFrutas.map(muestraLista)}
        
      </ol>
      </div>

      <div>
        <FrutasForm manejarInserccion={manejarInserccion}></FrutasForm>
      </div>
      
      
      {/*<NotaForm manejarAccion={manejarAccion}></NotaForm>*/}
    </div>
  );
}
export default App;





