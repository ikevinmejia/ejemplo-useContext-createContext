import React, { createContext, useEffect }  from "react";
import { useState } from "react";

// Construye

const Impresora = createContext();

// Provider => info que se comparte

// Consumer => consumimos

const EjemploContexto = ({ children }) => {
  // construccion de componente

  const [aumentar, setAumentar] = useState(0)
  //funcion

  const click = (nombre) => {
    console.log(`Ha hecho click ${nombre}`);
  };

  // objeto

  const estudiantes = {
    name: "Juan",
    edad: "longeva",
  };

  // Comprimiendo informacion a compartir
  const data = {
    click,
    estudiantes,
    aumentar,
    setAumentar
  };

  return (
    // En el provider añadir el value y dentro de este la data comprimida
    <Impresora.Provider value={data}>{children}</Impresora.Provider>
  );
}

export { Impresora, EjemploContexto };
