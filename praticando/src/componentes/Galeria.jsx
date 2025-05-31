import Card from "./Card"
import './Galeria.css'
import Detalhes from "./Detalhes";
import { useState } from 'react';

export default function Galeria({personagens}){

    const [persSelecionado, alterarPers] = useState(null);
    
    const selecionarPers = (personagem) => {
        alterarPers(personagem);
        };

    return(
        <>
            <div className="galeria">
                {personagens.map((pers) => (
                    <Card key={pers.id} url={pers.imagem} nome={pers.nome} onClick={() => selecionarPers(pers)}></Card>
                ))}
                <Detalhes personagem={persSelecionado}/>
            </div>
        </>
    )
}