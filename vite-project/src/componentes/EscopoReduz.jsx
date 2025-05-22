import './EscopoReduz.css'

const EscopoReduz = () => {
    function handleClick () {
        return(
            alert("Dois")
        )
    }
    return(
        <>
            <button onClick={() => console.log("OIIII")}>
                Não Clique
            </button>
            <div>
                <button onClick={() => alert("Oi querida")}>Outro Botão</button>
            </div>
            <div>
                <button onClick={handleClick}>Outro Botão 2</button>
            </div>
            <div className="container" onClick={() => alert ("div vermelha")}>
                <p>div</p>
            </div>
        </>
    )
}

export default EscopoReduz