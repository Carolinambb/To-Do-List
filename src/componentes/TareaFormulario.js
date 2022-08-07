import React, { useState } from "react";
import '../hojas-de-estilos/TareaFormulario.css'
import {v4 as uuidv4} from 'uuid'

 export default function TareaFormulario(props){

const [input, setInput] = useState('')

    const manejarCambio = e =>{
setInput(e.target.value) //extrae el valor del campo de texto
console.log(e.target.value)
}
const manejarEnvio = e =>{
    e.preventDefault(); //esto permite que la app no vuelva a cargar completamente, cuando se envia una nota

    const tareaNueva ={
        id: uuidv4(),
        texto : input,
        completada: false
    }
    props.onSubmit(tareaNueva)
}


return(
<form className="tarea-formulario"
onSubmit={manejarEnvio}>
    <input className="tarea-input"
    type='text'
    placeholder="Escribe una Tarea"
    name='texto'
    onChange={manejarCambio}/>
    
    <button className="tarea-boton">Agregar Tarea</button>
</form>
)
}