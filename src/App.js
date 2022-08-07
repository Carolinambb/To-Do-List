import './App.css';
import logoJustin from './imagenes/logoJustin.png'
//import Tarea from './componentes/Tarea';
//import TareaFormulario from './componentes/TareaFormulario';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='freecodecamp-logo-contenedor'>
        <img
        src={logoJustin}
        className='freecodecamp-logo' alt="img not found" 
        />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas/>
      </div>
    </div>
  );
}

export default App;
