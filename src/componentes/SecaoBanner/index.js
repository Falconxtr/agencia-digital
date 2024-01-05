import React from 'react';
import './style.css';

import Banner from "../../assets/banner.png";

export default function SecaoBanner(props) {
    const classeBanner = `imagem-banner ${props.tipoBackground === "bg-branco" ? "bg-branco": "bg-preto"}`;

    return(
        <section className="secao-banner">
            <div className={classeBanner}>
                <img src={Banner} alt="Imagem Banner" />
            </div>
            <div className="secao-banner-conteudo">
                <p>BRANDING / UI / UX / TECNOLOGIA</p>
                <h1>Agência de Branding</h1>
                <span>e design digital</span>
            </div>
        </section>
    );
}

