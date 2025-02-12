import { useState } from 'react'
import reactLogo from './assets/react.svg'
import BarraHerramientas from './components/BarraHerramientas'
import TemaContext from './contexts/TemaContext'
import temas from './mocks/mocks-temas'
import Color from './components/Color'

import './App.css'

function App() {
  return (
    <div>

      <TemaContext.Provider value={temas.light}>

        <BarraHerramientas>

        </BarraHerramientas>

        <Color></Color>
        
      </TemaContext.Provider>

      

    </div>
  )

}

export default App
