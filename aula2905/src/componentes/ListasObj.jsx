import {obj} from './dados.js'

export default function ListasObj(){

    const selecionados = obj.filter(selecionado => selecionado.idade === 18)

    return(
        <>
            <div>
                <ul>
                    {selecionados.map(selecionado => (
                        <li style={{fontSize: "12px", backgroundColor:"cornflowerblue"}} key={selecionado.id}>
                            <p>Nome: {selecionado.nome}, idade:{selecionado.idade}, id:{selecionado.id}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}