import React, {useState} from 'react';
import "./App.css";

import Topo from "./componentes/Topo";
import SecaoBanner from "./componentes/SecaoBanner";
import SecaoExperienciaTrabalho from './componentes/SecaoExperienciaTrabalho';
import Rodape from "./componentes/Rodape";

export default function App () {
  const [novaCor, setNovaCor] = useState("bg-branco");
  const [novaCor2, setNovaCor2] = useState("bg-branco2");

  return(
    <div>
      <Topo tipoBackground={novaCor} setState={setNovaCor} tipoBackground2={novaCor2} setState2={setNovaCor2}/>
      <SecaoBanner tipoBackground={novaCor} />
      <SecaoExperienciaTrabalho tipoBackground={novaCor2} />
      <Rodape tipoBackground={novaCor} />
    </div>
  );
}