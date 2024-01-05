import React from 'react';
import './style.css';


import Logo from "../../assets/logo.png";
import Lua from "../../assets/moon.png";
import Sol from "../../assets/sun.png";

export default function Topo(props) {
      
    const alterarCor = () => {
        if (props.tipoBackground === "bg-branco") {
          props.setState("bg-preto");
          props.tipoBackground2 === "bg-branco2" && props.setState2("bg-preto2");
        } else {
          props.setState("bg-branco");
          props.tipoBackground2 === "bg-preto2" && props.setState2("bg-branco2");
        }
      };

    const classeTopo = `topo ${props.tipoBackground}`;
    const classeBotao = `botao ${props.tipoBackground}`;

    return(
        <header className={classeTopo}> 
            <div className="secao-topo">
                <img src={Logo} alt="Logo" />
                <button onClick={alterarCor} className={classeBotao}>
                    <img src={props.tipoBackground === "bg-branco" ? Lua : Sol} alt="Dark Mode" />
                </button>
            </div>
        </header>
    );
}