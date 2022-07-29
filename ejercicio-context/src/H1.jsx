import React, { useContext } from 'react'
import { Impresora } from './context/EjemploContexto';
import Disminuir from './Disminuir';

function H1() {

    const {aumentar, setAumentar} = useContext(Impresora)

    const sume = () => {
        setAumentar( (a) => a + 1 )
    }
    

  return (
    <>
    <h1>{aumentar}</h1>
    <Disminuir />
    <button onClick={sume} >Hazme click para sumar</button>
    </>
  )
}

export default H1