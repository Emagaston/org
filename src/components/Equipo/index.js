import Colaborador from "../Colaborador"
import "./equipo.css"
import hexToRgba from 'hex-to-rgba';

 const Equipo = (dato) => {

     const {colorPrimario, colorSecundario, titulo, id} = dato.datos
     const {colaboradores, eliminarColaborador, actualizarColor, like} = dato
     const colorE = {backgroundColor: hexToRgba(colorPrimario, 0.6)}

     const colorTitulo = {borderColor: colorPrimario}

     return <>
         {colaboradores.length > 0 && 
         <section className="equipo" style={colorE}>
             <input
                 type="color"
                 className="input-color"
                 value={colorPrimario}
                 onChange={(evento) =>{
                     actualizarColor(evento.target.value, id)
                 }}
             />

             <h3 style={colorTitulo}>{titulo}</h3>
             <div className="lista-colab">
                 {colaboradores.map( (colaborador, index) => <Colaborador 
                 datos={colaborador} 
                 key={index}
                 colorPrimario={colorPrimario}
                 eliminarColaborador={eliminarColaborador}
                 like={like}
                 /> )}
             </div>
         </section>
         }
     </>
 }

export default Equipo