import './Contador.css'
import React from 'react'
import Display from './Display'
import PassoForm from './PassoForm'
import Botoes from './Botoes'

export default class Contador extends React.Component {

    state = {
        passo: this.props.passo || 1,
        valor: this.props.valor || 0,
    }

    incrementar = () => {
        this.setState({
            valor: this.state.valor + this.state.passo
        })
    }

    decrementar = () => {
        this.setState({
            valor: this.state.valor - this.state.passo
        })

    }

    mudarPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        })
    }

    render() {
        return (
            <div className='Contador'>
                <h2>Contador</h2>
                <div>
                    <PassoForm passo={this.state.passo}
                    onPassoChange={this.mudarPasso}></PassoForm>
                </div>
                <h4>Valor: {this.state.valor}</h4>
                <Display valor={this.state.valor + 100}/>
                <Botoes OnIncrementar={this.incrementar} OnDecrementar={this.decrementar}></Botoes>
            </div>
        )
    }
}