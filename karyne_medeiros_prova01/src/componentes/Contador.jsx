import { useState } from 'react'
import "./Contador.css"



export default function Contador(){
    // aqui tá definindo a contagem, começa com zero
    const [contador, setcontador] = useState(0)
    // aqui tá alterando a cor para azul caso a contagem seja maior do que 10. não deu tempo criar o dos números negativos
    const [cor, setCor] = useState('white')
    const alternarCor = () => {
        setCor((cor) => (contador > 10 ? "azul" : 'white'));
    };
        
  

    return(
        <>
            <div className="contador" onClick={alternarCor}>
                <h1>Contador</h1>
                {/* aqui aumenta mais um */}
                <button onClick={() => setcontador((contador) => contador + 1)}>+</button>
                {/* aqui pega o valor guardado dentro da variavel contador e coloca na tela  */}
                <p className={cor}>Contador: {contador}</p>
                {/* aqui subtrai um */}
                <button onClick={() => setcontador((contador) => contador - 1)}>-</button>
            </div>
        </>
      )
}