import './App.css';
import Coche from './components/Coche';
import losCoches from './mock-coches';

function App() {



  function muestraCoches(coche) {  

    return <Coche key={coche.matricula} coche={coche}></Coche>;
    
  }

  return (
    
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
      {losCoches.sort((a, b) => a.modelo.localeCompare(b.modelo)).map(muestraCoches)}
      </tbody>
    </table>

    );
}
export default App;





