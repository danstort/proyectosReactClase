import './App.css';
import ElementoLista from './components/ElementosLista';
import misTemas from './mocks/mock-misTemas';

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





