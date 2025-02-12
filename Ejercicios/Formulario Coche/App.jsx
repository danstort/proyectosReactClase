import './App.css';
import Coche from './components/Coche';
import losCoches from './mock-coches';
import CocheForm from './components/CocheForm';
import { useState } from 'react';

function App() {

  const [listaCoches, setListaCoches]= useState(losCoches);

  function muestraCoches(coche) {  

    return <Coche  key={coche.matricula} coche={coche}></Coche>;
    
  }

  function actualizarListaCoches(coche){

    setListaCoches([...listaCoches, coche]);

  }

  return (
    
    <div>

       <table>
      <thead>
        <tr>
          <th>Modelo</th>
          <th>Matricula</th>
          <th>Color</th>
          <th>Puertas</th>
        </tr>
      </thead>
      <tbody >
      {listaCoches.map(muestraCoches)}
      </tbody>
    </table>

    <CocheForm actualizarListaCoches={actualizarListaCoches}></CocheForm>


    </div>
   

    );
}
export default App;





