import React from 'react';
import "./App.css";

import Card from "./componentes/Card";

import Logo from "./assets/logo.png"; 
import Lua from "./assets/moon.png";
import Banner from "./assets/banner.png";
import Facebook from "./assets/facebook.png";
import Twitter from "./assets/twitter.png";
import Linkedin from "./assets/linkedin.png";
import Dribble from "./assets/dribble.png";
import Behance from "./assets/behance.png";
import Google from "./assets/google-plus.png";

export default function App () {
  return(
    <div>
      <header className="topo"> 
        <div className="secao-topo">
          <img src={Logo} alt="Logo" />
          <button>
              <img src={Lua} alt="Lua" />
          </button>
        </div>
      </header>
      <section className="secao-banner">
        <div className="imagem-banner">
          <img src={Banner} alt="Imagem Banner" />
        </div>
        <div className="secao-banner-conteudo">
          <p>BRANDING / UI / UX / TECNOLOGIA</p>
          <h1>Agência de Branding</h1>
          <span>e design digital</span>
        </div>
      </section>
      <section className="secao-experienciatrabalho">
        <div className="limita-secao secao-experienciatrabalho-conteudo">
          <h2>Experiências De Trabalho</h2>
          <div className="linha-amarela"></div>
          <p className="paragrafo">Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de Sites e Marketing Digital, nos empenhamos diariamente para entregar resultados que tragam impacto aos nossos clientes.</p>
          <div className='secao-card'>
            <Card
              data="JUNHO 2012 - 2016"
              titulo="Web Designer"
              empresa="Pied Piper StartUp."
              paragrafo="Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores"
            />
            <Card
              data="AGOSTO 2016 - 2019"
              titulo="Product Designer"
              empresa="E Corp."
              paragrafo="Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra"
            />
            <Card
              data="FEVEREIRO 2019 - 2021"
              titulo="Digital Consulting"
              empresa="Arasaka Inc."
              paragrafo="Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução"
            />
          </div>
        </div>
      </section>
      <footer className="secao-rodape">
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
    </div>
  );
}