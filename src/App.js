 
import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import Boton from './componentes/Boton'

function App() {

  function sumar (){ }
  function reiniciar (){ }
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo'
        src={freeCodeCampLogo}
        alt='Logo de freeCodeCamp'/>
      </div>
      <div className='contenedor-principal'>
        <Boton
        texto= "Click"
        esBotonDeClick= {true}
        manejarClick= {sumar}
        />
        <Boton
        texto= "Reiniciar"
        esBotonDeClick= {false}
        manejarClick= {reiniciar}
        />
      </div>
    </div>
  );
}

export default App;
