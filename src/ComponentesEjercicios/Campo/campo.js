import { useState } from "react";

const Campo = (props) => {
    const [valor, setValor] = useState("");
    const manejarCambio = (e) => {
        setValor(e.target.value);
        props.actualizarId(e.target.value)
        
    }
    return (
        <input
                required
                placeholder='Ingrese id'
                value={valor}
                type="number"
                onChange={manejarCambio}
                />
    )
}


export default Campo