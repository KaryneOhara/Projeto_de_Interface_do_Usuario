import {nomes} from './dados.js'

export default function ListasMap(){

    return(
        <div>
            <ul>
                {nomes.map(nome => (
                    <li style={{fontSize: '24px'}}>{nome}</li>
                ))}
            </ul>
        </div>
    )
}