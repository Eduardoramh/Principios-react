import logo from './logo.svg';
import './App.css';
import HolaMundo from './components/HolaMundo';
// import HolaMundo, { AdiosMundo } from './components/HolaMundo';
// ↑↑ Cuando se exporta una funcion de un componente y no es default export, se pone entre corchetes {} ↑↑ 
import AdiosMundo from './components/AdiosMundo';
import Saludar from './components/Saludar';


function App() {
  const user = {
    nombre: "Eduardo",
    edad: 21,
    color: "Rojo"
  };

  const saludarFn = (nombre, edad) => {
    console.log("Hola " + nombre + ", tiene " + edad + " años. ");
    console.log(`Hola ${nombre}, tiene ${edad} años.`)
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludar userInfo={user} saludarFn={saludarFn} />
      </header>
    </div>
  );
}

export default App;
