import "./formulario.css"
import { useState } from "react"
import Campos from "../Campos"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton/boton"

const Formulario = (dato) => {

    const [name, setName] = useState("")
    const [puesto, setPuesto] = useState("")
    const [foto, setFoto] = useState("")
    const [equipo, setEquipo] = useState("")

    const [titulo, setTitulo] = useState("")
    const [color, setColor] = useState("")
     
    const {registrarColaborador, crearEquipo} = dato


    const manejarEnv = (e) => {
        e.preventDefault()
        let datosAEnviar = {
            name,
            puesto,
            foto,
            equipo,
        }
        registrarColaborador(datosAEnviar)
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({titulo, colorPrimario: color})
    }

    return <section className="formu">
        <form onSubmit={manejarEnv}>
            <h2>Rellena el formuladrio para crear el colaborador</h2>
            <Campos titulo="Nombre" placeholder="Ingrese nombre" required valor={name} actualizarValor={setName}/>
            <Campos titulo="Puesto" placeholder="Ingrese puesto" required valor={puesto} actualizarValor={setPuesto}/>
            <Campos titulo="Foto" placeholder="Ingrese enlace de foto" required valor={foto} actualizarValor={setFoto}/>
            <ListaOpciones valor={equipo} actualizarEquipo={setEquipo} equipos={dato.equipos}/>
            <Boton>Crear</Boton>    
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formuladrio para crear el equipo</h2>
            <Campos titulo="Titulo" placeholder="Ingresar titulo" required valor={titulo} actualizarValor={setTitulo}/>
            <Campos titulo="Color" placeholder="Ingresar color en Hex" required valor={color} actualizarValor={setColor} type="color"/>
            <Boton>Registrar equipo</Boton>  
        </form>
    </section>
}

export default Formulario