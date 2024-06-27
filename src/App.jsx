import './App.css'
import React from "react";
import Cards from "./components/layout/Cards";
import Primeiro from "./components/Primeiro";
import ComParametro from './components/ComParametro';
import ComFilhos from './components/ComFilhos'
import Repeticao from './components/Repeticao';
import Condicional from './components/Condicional';
import CondicionalComIf from './components/CondicionalComIf';
import Pai from './components/comunicacao/direta/Pai';
import Super from './components/comunicacao/indireta/Super';
import Input from './components/form/Input';
import ComponenteDeTeste from './components/form/Teste';
import Contador from './components/contador/Contador';
import Mega from './components/mega/Mega';


export default (props) => (
    <div className="App">
        <h1>Componentes</h1>
        <div className='Cards'>
            <Cards titulo="#11 - Comp. Mega" color="#F56A2V">
                <Mega qtdNumero={8}></Mega>
            </Cards>
            <Cards titulo="#10 - Comp. Contador" color="#C73E1D">
                <Contador passo={10} valor={10}></Contador>
            </Cards>
            <Cards titulo="#09 - Comp. Input" color="#A23B72">
                <Input></Input>
            </Cards>
            <Cards titulo="#08 - Comp. Comunicação indireta" color="#8B6220">
                <Super></Super>
            </Cards>
            <Cards titulo="#07 - Comp. Comunicação Direta" color="#D81E5B">
                <Pai sobrenome="ANDRADE"></Pai>
            </Cards>
            <Cards titulo="#06 - Comp. Condicional COM IF" color="#2E86AB">
                <CondicionalComIf numero={30} />
            </Cards>
            <Cards titulo="#05 - Comp. Condicional" color="#A23B72">
                <Condicional numero={5688} />
            </Cards>
            <Cards titulo="#04 - Comp. Lista" color="#F18F01">
                <Repeticao />
            </Cards>
            <Cards titulo="#03 - Comp. Filhos" color="#C73E1D" >
                <ComFilhos>
                    <li>Jose</li>
                    <li>Joao</li>
                    <li>Maria</li>
                    <li>Sandra</li>
                </ComFilhos>
            </Cards>
            <Cards titulo="#02 - Comp c. Parametro" color="#3B1F2B">
                <ComParametro titulo="Componente com Parametro" subtitulo="Esse é o subtitulo" />
            </Cards>
            <Cards titulo="#01 - Primeiro Componente(componente Card)" color="#F0544F">
                <Primeiro />
            </Cards>

        </div>
    </div>

);
