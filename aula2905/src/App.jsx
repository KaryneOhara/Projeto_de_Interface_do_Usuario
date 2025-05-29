import { useState } from 'react'
import ListasMap from './componentes/ListasMap'
import ListasFilter from './componentes/ListasFilter'
import ListasObj from './componentes/ListasObj'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ListasMap/>
      <ListasFilter/>
      <ListasObj/>
    </>
  )
}

export default App
