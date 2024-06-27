import React from 'react'

function PassoForm(props) {
  return (
    <div>
        <label htmlFor="passoInput">Passo:</label>
        <input id="passoInput" type="number" 
            value={props.passo} 
            onChange={evento => props.onPassoChange(+evento.target.value)}/>
    </div>
  )
}

export default PassoForm