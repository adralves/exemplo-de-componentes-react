import React from 'react'

function Botoes(props) {


    return (
        <div>
            <button onClick={props.OnDecrementar}>-</button>
            <button onClick={props.OnIncrementar}>+</button>
        </div>
    )
}

export default Botoes