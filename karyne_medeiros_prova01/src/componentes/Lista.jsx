import "./Lista.css"
import {carros} from '../dados_carros.js'
export default function Lista({carros}){
// aqui eu vou passar carro lá no app
    return(
        <>
            <h1>Lista de carros e seus anos</h1>
            <div className="lista">
                {/* vai mapear a array dos carros e pegar cada elemento */}
                {carros.map((car) => (
                    <div className="card" key={car.id}>
                        <h3>Modelo do Carro: {car.modelo}</h3>
                        <h4>Ano do Carro: {car.ano}</h4>
                    </div>
                ))}
           </div>
        </>
    )
}