import './App.css';

import rm from './mocks/mock-rm';
import { useState } from "react";
import Menu from './components/Menu';
import Home from './pages/Home';
import Bienvenido from './pages/Bienvenido';
import { Route, Routes } from 'react-router-dom';
import Nosotros from './pages/Nosotros';

function App() {

  

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





