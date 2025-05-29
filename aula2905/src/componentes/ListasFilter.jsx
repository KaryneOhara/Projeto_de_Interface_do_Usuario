import {times} from './dados.js'

export default function ListasFilter(){

    const maiordetodos = times.filter(time => time !="Flamengo")
    return(
        <>
            <div>
                <ul>
                    {maiordetodos.map(maior => (
                        <li style={{fontSize: '40px', backgroundColor: "purple", color:"white"}}>
                           {maior}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}