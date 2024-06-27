import React, { useState } from 'react'

function CaixaDeTexto() {

    const [nome,setNome] = useState('Pedro')

  return (
    <div>
        <input type="text" value={nome} onChange={evento => setNome(evento.target.value)}/>
        <h2>{nome}</h2>
    </div>
  )
}

export default CaixaDeTexto