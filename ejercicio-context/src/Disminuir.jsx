import React from 'react'
import { useContext } from 'react'
import { Impresora } from './context/EjemploContexto'

function Disminuir() {

    const { setAumentar } = useContext(Impresora)

    const disminuir = () => {
        setAumentar(prev => prev - 1)
    }

  return (
    <button onClick={disminuir}>
        Hazme click para restar
    </button>
  )
}

export default Disminuir