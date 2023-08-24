import { useState } from "react";
import './contador.css';



const Contador = () => {

    const [contador, actualizar] = useState(0);

    return (
        <div className="divContador">
            <span className="span-contador">{contador}</span>
        <button className="boton-contador" onClick={ () => {actualizar(contador + 1)}}>
            Incremetar +
        </button>
        <button className="boton-contador" onClick={ () => {actualizar(contador - 1)}}>
            Decrementar -
        </button>
        </div>
    )
}

export default Contador;