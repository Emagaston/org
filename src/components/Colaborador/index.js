import "./colaborador.css"
import { IoIosCloseCircle, IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

const Colaborador = (dato) =>{

    const {nombre, puesto, foto, equipo, id, fav} = dato.datos
    const {colorPrimario, eliminarColaborador, like} = dato

    return <div className="colaborador">
        <IoIosCloseCircle  className="eliminar" key={eliminarColaborador} onClick={() => eliminarColaborador(id)}/>
        <div className="encabezado" style={{backgroundColor:colorPrimario}}>
            <img src={foto} alt={nombre}></img>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ? <IoMdHeart color="red" onClick={() => like(id)}/> : <IoMdHeartEmpty onClick={() => like(id)}/>}
        </div>

    </div>
}

export default Colaborador