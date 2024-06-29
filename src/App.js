import './App.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/header/header';
import Formulario from './components/Formulario/formulario';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer';
import Colaborador from './components/Colaborador';

function App() {

  const [mostrarForm,setMostrarForm] = useState(true)
  const [colaboradores, actualizarColaboradores] = useState(()=>{
    //obtiene los valores del localstorage
    const savedColaboradores = localStorage.getItem('colaboradores');
    return savedColaboradores ? JSON.parse(savedColaboradores) : [];})

  // const [equipos, actualizarEquipos] = useState([
  //   {
  //     titulo:"Programación",
  //     colorPrimario: "#57C278",
  //     colorSecundario: "#D9F7E9"
  //   },
  //   {
  //     titulo:"Front End",
  //     colorPrimario: "#82CFFA",
  //     colorSecundario: "#E8F8FF"
  //   },
  //   {
  //     titulo:"Data Science",
  //     colorPrimario: "#A6D157",
  //     colorSecundario: "#F0F8E2"
  //   },
  //   {
  //     titulo:"Devops",
  //     colorPrimario: "#E06B69",
  //     colorSecundario: "#FDE7E8"
  //   },
  //   {
  //     titulo:"UX y Diseño",
  //     colorPrimario: "#DB6EBF",
  //     colorSecundario: "#FAE9F5"
  //   },
  //   {
  //     titulo:"Móvil",
  //     colorPrimario: "#FFBA05",
  //     colorSecundario: "#FFF5D9"
  //   },
  //   {
  //     titulo:"Innovacion y gestion",
  //     colorPrimario: "#FF8A29",
  //     colorSecundario: "#FFEEDF"
  //   }])

  const initialEquipos = [
    { id: uuidv4(), titulo: "Programación", colorPrimario: "#57C278", colorSecundario: "#D9F7E9", fav: false},
    { id: uuidv4(), titulo: "Front End", colorPrimario: "#82CFFA", colorSecundario: "#E8F8FF", fav: false},
    { id: uuidv4(), titulo: "Data Science", colorPrimario: "#A6D157", colorSecundario: "#F0F8E2", fav: false},
    { id: uuidv4(), titulo: "Devops", colorPrimario: "#E06B69", colorSecundario: "#FDE7E8", fav: false},
    { id: uuidv4(), titulo: "UX y Diseño", colorPrimario: "#DB6EBF", colorSecundario: "#FAE9F5", fav: false},
    { id: uuidv4(), titulo: "Móvil", colorPrimario: "#FFBA05", colorSecundario: "#FFF5D9", fav: false },
    { id: uuidv4(), titulo: "Innovacion y gestion", colorPrimario: "#FF8A29", colorSecundario: "#FFEEDF", fav: false},
  ];

    const [equipos, actualizarEquipos] = useState(() => {
      // Obtiene los valores del localStorage
      const savedEquipos = localStorage.getItem('equipos');
      return savedEquipos ? JSON.parse(savedEquipos) : initialEquipos;
    });
  
  const cambiarMostrar = () => {
    setMostrarForm(!mostrarForm)
  }

  // const registrarColaborador = (colaborador) =>{
  //   //Spread operator copia valores de una lista
  //   colaborador.id = uuidv4();
  //   const nuevosColaboradores = [...colaboradores, colaborador]
  //   console.log(nuevosColaboradores)
  //   actualizarColaboradores(nuevosColaboradores)
  //   //guarda los valores del localstorage
  //   localStorage.setItem('colaboradores',JSON.stringify(nuevosColaboradores))
  // }

  const registrarColaborador = (colaborador) => {
    colaborador.id = uuidv4();
    // Buscar el equipo correspondiente en initialEquipos
    const equipo = initialEquipos.find(e => e.titulo === colaborador.equipo);
    if (equipo) {colaborador.fav = equipo.fav;}  // Asignar el valor de fav
    console.log(colaborador)
    const nuevosColaboradores = [...colaboradores, colaborador];
    actualizarColaboradores(nuevosColaboradores);
    localStorage.setItem('colaboradores', JSON.stringify(nuevosColaboradores));
  };

  const eliminarColaborador = (id) =>{
    const colaboradoresActualizados = colaboradores.filter(
      (colaborador) => colaborador.id !== id);
    actualizarColaboradores(colaboradoresActualizados);
    localStorage.setItem('colaboradores', JSON.stringify(colaboradoresActualizados));
    
  }

  const actualizarColor = (color, id) =>{
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)
    localStorage.setItem('equipos', JSON.stringify(equiposActualizados));
  }

  const crearEquipo = (nuevoEquipo) => {
    actualizarEquipos([...equipos,{...nuevoEquipo, id: uuidv4()}])
  }

  const like = (id) => {
    console.log("Like: ",id)
    const likeActualizado = colaboradores.map((colaborador) => {
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav}
        return colaborador
    })
    actualizarColaboradores(likeActualizado)
    localStorage.setItem('colaboradores', JSON.stringify(likeActualizado));
  }
  return (
    <div>
      <Header />
      {/*mostrarForm ? <Formulario /> : <></>*/}
      {mostrarForm && <Formulario 
      equipos = {equipos.map((equipo) => equipo.titulo)} 
      registrarColaborador={registrarColaborador} 
      crearEquipo={crearEquipo}/>}

      <MiOrg cambiarMostrar={cambiarMostrar}/>
      {equipos.map( (equipo) =><Equipo 
      datos={equipo} 
      key={equipo.id} 
      colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
      eliminarColaborador={eliminarColaborador}
      actualizarColor={actualizarColor}
      like = {like}
      />)}

      <Footer />
    </div>  
  );
}


export default App;
