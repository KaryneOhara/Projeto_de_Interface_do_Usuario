// export default function Props({nome, newname}){
export default function Props(props){
    return(
        <>
            <div>
                <h2>👍Teste Props</h2>
                <p>O nome {props.nome} foi enviado via props😉</p>
                <p>{props.newname}💅</p>
            </div>
        </>
    )
}