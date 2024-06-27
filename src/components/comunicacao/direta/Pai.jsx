import React from "react";
import Filho from "./Filho";

function Pai(props) {
  return (
    <div>
        <h2>Componente Pai</h2>
        <Filho sobrenome={props.sobrenome}>JOAO</Filho>
        <Filho sobrenome="SILVA">MARIA</Filho>
        <Filho sobrenome="SILVA">JOSE</Filho>
        <Filho {...props}>RICARDO</Filho>
        {/* PASSANDRO PROPRIEDADES USANDO spread(...) <Filho {...props}>RICARDO</Filho> */}
    </div>
  )
}

export default Pai