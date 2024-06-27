import React, { useState } from 'react'

function Mega(props) {
    const [numeros,setNumeros] = useState(Array(props.qtdNumero).fill(0))

    const min = 1
    const max = 60

    function gerarNumeroNaoContido(array){
        const novoNumero = parseInt(Math.random() * (max - min))
        return array.includes(novoNumero) 
            ? gerarNumeroNaoContido(array) : novoNumero
    }

    function gerarNumeros() {
        const novoArray = Array(props.qtdNumero)
            .fill(0)
            .reduce(a => [...a,gerarNumeroNaoContido(a)],[])
            .sort((a,b) => a - b)
        setNumeros(novoArray)
    }

  return (
    <div>
        <h3>Mega</h3>
        <h4>{numeros.join('-')}</h4>
        <button onClick={gerarNumeros}>Gerar número</button>        
    </div>

  )
}

export default Mega