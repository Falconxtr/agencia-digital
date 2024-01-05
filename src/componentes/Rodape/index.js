import React from "react";
import './style.css';

import Logo from "../../assets/logo.png"; 
import Facebook from "../../assets/facebook.png";
import Twitter from "../../assets/twitter.png";
import Linkedin from "../../assets/linkedin.png";
import Dribble from "../../assets/dribble.png";
import Behance from "../../assets/behance.png";
import Google from "../../assets/google-plus.png";

export default function Rodape(props) {
    const classeRodape = `secao-rodape ${props.tipoBackground === "bg-branco" ? "bg-branco": "bg-preto"}`;

    return(
        <footer className={classeRodape}>
            <div className="limita-secao secao-rodape-conteudo">
                <img src={Logo} alt="Logo" className="logo-rodape" />
                <p className="paragrafo-rodape">Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias, ferramentas e tecnologias personalizadas.</p>
                <div className="secao-icones">
                    <img className="icone" src={Facebook} alt="Logo Facebook" />
                    <img className="icone" src={Twitter} alt="Logo Twitter" />
                    <img className="icone" src={Linkedin} alt="Logo Linkedin" />
                    <img className="icone" src={Dribble} alt="Logo Dribble" />
                    <img className="icone" src={Behance} alt="Logo Behance" />
                    <img className="icone" src={Google} alt="Logo Google" />
            </div>
            <div className="copyright">
                <p>Copyright 2024 © <span>Lucas Teixeira de Jesus</span></p>
            </div>
            </div>
        </footer>
    );
}