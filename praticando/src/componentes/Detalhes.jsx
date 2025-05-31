import './Detalhes.css'

export default function Detalhes({personagem}){
    if (!personagem){
        return null;
    }
    return(
        <>
            <div className="detalhes">
                <img src={personagem.imagem}/>
                <h3>{personagem.nome}</h3>
                <p>{personagem.descricao}</p>
            </div>
        </>
    )
}