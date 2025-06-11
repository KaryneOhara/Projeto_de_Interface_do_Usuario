import {carros} from '../dados_carros.js'

export default function ListaFilter(){
    // o filtro cria um array com todos os carros que tem a cor vermelha
    const corvermelha = carros.filter(carro => carro.cor === "vermelho")
    return(
        <>
            <div>
                <h1>Carros Vermelhos</h1>
                <ul>
                    {/* e aqui  mapeia cada carro vermelho da array e coloca no li */}
                    {corvermelha.map(carro => (
                        <li style={{fontSize: '36px'}} key={carro.id}>
                            <p>Modelo do Carro: {carro.modelo}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}