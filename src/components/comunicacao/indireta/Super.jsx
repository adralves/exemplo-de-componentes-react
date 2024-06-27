import React, { useState } from "react";
import Sub from "./Sub";

function Super(props) {

    const [num,setNum] = useState(0)
    const [texto, setTexto] = useState('VALOR')

    function quandoClicar(valorGerado, texto){
        setNum(valorGerado)
        setTexto(texto)
        console.log('Clicou!')
        console.log(valorGerado)
    }


  return (
    <div>
        <h2>{texto}: {num}</h2>
        <Sub onClicar={quandoClicar}></Sub>
    </div>
  )
}

export default Super