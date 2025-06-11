import "./Tarefa.css"
import { useState } from "react"

export default function Tarefa(props){

    const [status, atualizarStatus] = useState('Pendente');
        
    const alternarStatus = () => {
        atualizarStatus((status) => (status === 'Pendente' ? 'Concluída' : 'Pendente'));
        };

    return(
        <>
            <div className="tarefa">
                <h3>{props.descricao}</h3>
                <p className={status}>{status}</p>
                <button onClick={alternarStatus}>Marcar como {status === 'Pendente' ? 'Concluída' : 'Pendente'}</button>
            </div>
        </>
    )
}
