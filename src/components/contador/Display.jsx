import './Display.css'
import React from 'react'

function Display(props) {
  return (
    <div className='ImagemDysplay'>
       {/* <img src="https://m.media-amazon.com/images/I/712GQgcwxGL._SY466_.jpg" alt="" /> */}
        <h4>Valor do Produto R$: {props.valor}</h4>
    </div>
  )
}

export default Display