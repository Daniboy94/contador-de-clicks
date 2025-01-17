import "./App.css";
import Boton from "./componentes/Boton";
import Contador from "./componentes/Contador";
import freeCodeCampLogo from "./imagenes/freecodecamp-logo.png"; // se usa un solo punto cuando la carpeta esta en el mismo nivel y .. para salir de la carpeta
import { useState } from "react"; //importamos el Hook, es uno de los que mas se usa

function App() {
  const [numClics, setNumClics] = useState(0); //usamos el hook useState para que tome un valor de 0

  const manejarClic = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className="Freecodecamp-logo-contenedor">
        <img className="freecodecamp-logo" src={freeCodeCampLogo} alt="logo" />
      </div>
      <div className="contenedor-principal">
        <Contador numClics={numClics} />

        <Boton texto="Clic" esBotonDeClic={true} manejarClic={manejarClic} />

        <Boton
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
