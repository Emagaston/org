import "./miOrg.css"
import { useState } from "react"

const MiOrg = (datos) =>{
    // const [name, setName] = useState(true)
    // const manejarClick = () =>{
    //     console.log()
    //     setName(!name)
    // }
    return <section className="orgSection">
        <h3 className="title">Mi organizacion</h3>
        <img src="/img/add.png" alt="add" onClick={datos.cambiarMostrar}></img>        
    </section>
}

export default MiOrg