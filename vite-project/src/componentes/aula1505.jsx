import { useState } from "react"

export default function Aula1505(){
    // let valor = 0
    let [valor, setValor] = useState(0)

    return(
        <>
            <div>
                <button onClick={() => setValor(valor + 1)}>{valor} Cliques</button>
            </div>
        </>
    )
}