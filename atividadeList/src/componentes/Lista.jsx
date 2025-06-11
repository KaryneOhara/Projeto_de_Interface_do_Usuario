import Tarefa from "./Tarefa"
import "./Lista.css"

export default function Lista({atividades}){


    return(
        <>
           <div className="lista">
                {atividades.map((atv) => (
                    <Tarefa key={atv.id} descricao={atv.descricao} status={atv.status}></Tarefa>
                ))}
           </div>
        </>
    )
}