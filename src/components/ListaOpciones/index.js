import "./listaOpciones.css"

const ListaOpciones = (dato) => {
    
    const manejarCambio = (e) =>{
        dato.actualizarEquipo(e.target.value)
    }
    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={dato.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {dato.equipos.map( (equipo, index) => <option key={index} value={equipo}>{equipo}</option>)}
        </select>
    </div>
}

export default ListaOpciones