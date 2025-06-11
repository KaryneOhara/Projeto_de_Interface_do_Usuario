import { useState } from 'react'
import './App.css'
import Lista from './componentes/Lista'
import atividades from './atividades'
import Tema from './componentes/Tema'

function App() {

  return (
    <>
    <Tema>
      <h1>ATIVIDADES</h1>
      <div>
        <Lista atividades={atividades}/>
      </div>
    </Tema>
    </>
  )
}

export default App
