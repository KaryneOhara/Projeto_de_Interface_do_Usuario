import { useState } from 'react'
import './App.css'
import img1 from './assets/img1.png'
import img2 from './assets/img2.png'
import img3 from './assets/img3.png'
import img4 from './assets/img4.png'
import img5 from './assets/img5.png'
import img6 from './assets/img6.png'
import Galeria from './componentes/Galeria'
import Tema from './componentes/Tema'


const personagens = [
  {id:1,
  nome: "Vergonha",
  descricao: "Tem vergonha de tudo",
  imagem: img1
  },
  {id:2,
  nome: "Alegria",
  descricao: "Sempre otimista",
  imagem: img2
  },
  {id:3,
  nome: "Tristeza",
  descricao: "Sempre pesa o clima",
  imagem: img3
  },
  {id:4,
  nome: "Tédio",
  descricao: "Não tem ânimo para nada, anda em itálico",
  imagem: img4
  },
  {id:5,
  nome: "Raiva",
  descricao: "Sempre estressado",
  imagem: img5
  },
  {id:6,
  nome: "Ansiedade",
  descricao: "Pensa demais e sempre imagina cenários problemáticos",
  imagem: img6
  },
]

function App() {

  return (
    <>
      <Tema>
        <h1>Divertidamente</h1>
        <div className='container'>
          <Galeria personagens={personagens}/>
        </div>
      </Tema>
    </>
  )
}

export default App
