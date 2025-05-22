import "./Card.css"

export default function Card (props){

    return(
        <>
            <div className="imagens">
                <figure>
                    <img src={props.url} />
                    <figcaption>{props.nome}</figcaption>
                </figure>
            </div>
        </>
    )
}