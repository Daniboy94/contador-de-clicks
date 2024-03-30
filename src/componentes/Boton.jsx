import React from "react";
import "../stylesheets/Boton.css";

function Boton({ texto, esBotonDeClic, manejarClic }) {
  //sintaxis de desustruracción se cambia el props por una palabra mas concisa
  return (
    //operador ternario es como un condicional, utilizamos el eventlistener onClick
    <button
      className={esBotonDeClic ? "boton-clic" : "boton-reiniciar"}
      onClick={manejarClic}
    >
      {texto}
    </button>
  );
}

export default Boton;
