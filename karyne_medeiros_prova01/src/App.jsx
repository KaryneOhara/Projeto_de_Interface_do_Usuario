import './App.css'
import Contador from './componentes/Contador'
import Lista from './componentes/Lista.jsx'
import {carros} from './dados_carros.js'
import ListaFilter from './componentes/ListaFilter.jsx'
function App() {


  return (
    <>
      {/* chamando cada componente */}
      <Contador/>
      <br />
      <Lista carros={carros}></Lista>
      <ListaFilter/>
    </>
  )
}

export default App
