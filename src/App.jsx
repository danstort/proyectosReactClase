import './App.css';
import ElementoLista from './components/ElementosLista';
import misTemas from './mocks/mock-misTemas';
import DetallesLista from './components/DetallesLista';

function App() {



  function muestraLista(lista) {

    return <ElementoLista lista={lista}></ElementoLista>;

  }

  return (


    <ul>

      
      {misTemas.map(muestraLista)}
      
    </ul>


  );
}
export default App;





