import './App.css';
import Coche from './components/Coche';
import losCoches from './mock-coches';
import CocheForm from './components/CocheForm';

function App() {

  function muestraCoches(coche) {  

    return <Coche  key={coche.matricula} coche={coche}></Coche>;
    
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
      {losCoches.map(muestraCoches)}
      </tbody>
    </table>

    <CocheForm></CocheForm>


    </div>
   

    );
}
export default App;





