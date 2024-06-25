import './App.css'
import React from "react";
import Cards from "./components/layout/Cards";
import Primeiro from "./components/Primeiro";
import ComParametro from './components/ComParametro';
import ComFilhos from './components/ComFilhos'
import Repeticao from './components/Repeticao';
import Condicional from './components/Condicional';
import CondicionalComIf from './components/CondicionalComIf';

export default (props) => (
    <div className="App">
        <Cards titulo="#06 - Comp. Condicional COM IF">
            <CondicionalComIf numero={30} />
        </Cards>        
        <Cards titulo="#05 - Comp. Condicional">
            <Condicional numero={5688} />
        </Cards>        
        <Cards titulo="#04 - Comp. Lista">
            <Repeticao />
        </Cards>        
        <Cards  titulo="#03 - Comp. Filhos" >
            <ComFilhos>
                <li>Jose</li>
                <li>Joao</li>
                <li>Maria</li>
                <li>Sandra</li>
            </ComFilhos>
        </Cards>
        <Cards titulo="#02 - Comp c. Parametro" >
            <ComParametro  titulo="Componente com Parametro" subtitulo="Esse é o subtitulo"/>
        </Cards>
        <Cards titulo="#01 - Primeiro Componente(componente Card)">
            <Primeiro />
        </Cards>
    </div>

);
