import { useState, useEffect } from 'react'

export default function Componente02(){

    // Implemente um input que a medida que o usuário insere dados (um texto por exemplo) o background da tela mude de cor.

    const [texto, setTexto] = useState('')
    function handleColor(){
            const cor = ["#FF6B6B", "#6BCB77", "#4D96FF", "#FFD93D", "#835AFD"];
            const randomColor = cor[Math.floor(Math.random() * cor.length)];
            document.body.style.backgroundColor = randomColor;

    }

    const handleTexto = (e) => {
        setTexto(e.target.value)
    }

    useEffect(() => {
        handleColor()
    },[{texto}])

    return(
        <>
            <div className="card">
                <input onChange={handleTexto} value={texto} placeholder='Digite algo: '/>
            </div>

        </>
    )
}
