import "./campos.css"
import { useState } from "react"

const Campos = (datosE) => {
    const placeholderMod = `${datosE.placeholder}...`

    const {type = "text"} = datosE
    
    const manejarCambio = (e) =>{
        datosE.actualizarValor(e.target.value)
    }

    return <div className={`campo campo-${type}`}>
        <label>{datosE.titulo}</label>
        <input placeholder={placeholderMod} 
        required = {datosE.required} 
        value={datosE.valor}
        onChange={manejarCambio}
        type={type}
        />
    </div>
}

export default Campos