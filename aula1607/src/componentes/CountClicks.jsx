import { useState, useEffect } from 'react'

export default function CountClicks() {
  const [count, setCount] = useState(0)

  //useeffect (configurar, dependencias?)

  function handleColor(){
            const cor = ["#FF6B6B", "#6BCB77", "#4D96FF", "#FFD93D", "#835AFD"];
            const randomColor = cor[Math.floor(Math.random() * cor.length)];
            document.body.style.backgroundColor = randomColor;

    }

// esse useEffect não tem dependecia, então ele vai ser disparado ao recarregar a página ou renderizar um componente
  useEffect(() => {
    handleColor()
  },)

//   esse aqui só altera a cor quando a página é recarregada, não altera ao clicar no contador
// [] é uma dependência vazia
//   useEffect(() => {
//     handleColor()
//   },[])

// aqui ele vai mudar se o valor de count mudar, nesse caso coincidentemente tem o mesmo efeito do primeiro
// useEffect(() => {
//     handleColor()
//   },[{count}])

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}