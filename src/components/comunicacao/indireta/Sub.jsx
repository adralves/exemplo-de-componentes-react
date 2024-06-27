import React from 'react'

function Sub(props) {
  return (
    <div>
        <button onClick={() => {props.onClicar(Math.random(),'Número da Sorte')}}>Alterar</button>
     </div>

  )
}

export default Sub