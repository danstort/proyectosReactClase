import './App.css';

import notas from './mocks/mock-notas';
import ListaNotas from './components/ListaNotas';
import NotaForm from './components/NotaForm';
import { useState } from "react";
import Menu from './components/Menu';
import Home from './pages/Home';
import Bienvenido from './pages/Bienvenido';
import { Route, Routes } from 'react-router-dom';
import Nosotros from './pages/Nosotros';

function App() {

  const [mostrarImportantes, setMostrarImportantes] = useState(false);

  const [listaNotas, setListaNotas] = useState(notas);



  function muestraLista(lista) {

    return <ListaNotas key={lista.id} lista={lista}></ListaNotas>;

  }

  function filtrarImportantes(nota) {
    if (mostrarImportantes) {
      return nota.importante; // Filtra solo las notas importantes
    }
    return true; // Si no se filtran importantes, muestra todas
  }
  
  function manejarAccion(nota) {

    setListaNotas([...listaNotas, nota]);

}

  return (
    <div>

      <Menu>

      </Menu>
      <Routes>

        <Route path="/" element={<Home></Home>} />

        <Route path="/users/:name" element={<Bienvenido></Bienvenido>} />

        <Route path="/about" element={<Nosotros></Nosotros>} />
        
      </Routes>

    </div>
  );
}
export default App;





