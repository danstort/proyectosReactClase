import './App.css';
import ListaNotas from './components/ListaNotas';
import notas from './mocks/mock-notas';
import DetallesLista from './components/DetallesLista';

function App() {



  function muestraLista(lista) {

    return <ListaNotas key={lista.id} lista={lista}></ListaNotas>;

  }

  return (


    <ul>

      
      {notas.map(muestraLista)}
      
    </ul>


  );
}
export default App;





