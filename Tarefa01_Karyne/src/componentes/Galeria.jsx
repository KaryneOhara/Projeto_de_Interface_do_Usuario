import Card from "./Card";
import img1 from "../assets/chaves.png"
import img2 from "../assets/kiko.png"
import img3 from "../assets/chiquinha.png"
import img4 from "../assets/nhonho.png"
import img5 from "../assets/professor.png"
import img6 from "../assets/donaFlorinda.png"
import "./Galeria.css"

export default function Galeria(){
    return(
        <>
            <div className="conteiner">
                <Card url={img1} nome="Chaves" ></Card>
                <Card url={img2} nome="KIko" ></Card>
                <Card url={img3} nome="Chiquinha" ></Card>
                <Card url={img4} nome="Nhonho" ></Card>
                <Card url={img5} nome="Professor Girafales" ></Card>
                <Card url={img6} nome="Dona Florinda" ></Card>
            </div>
        </>
    )
}