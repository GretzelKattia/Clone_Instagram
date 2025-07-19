// import logo from './logo.svg';
import './App.css';
import Esquerda from './componentes/Esquerda/ConteudoLateralEsquerda'
import Direita from './componentes/Direita/ConteudoLateralDireita';
import Central from './componentes/Central/ConteudoCentral'
// './ConteudoLateralEsquerda';
// ../componentes/Central/ConteudoCentral
// JSX 
// import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    <>
    <div id="conteudoLateralEsquerda">
      <Esquerda />
      </div>
      <Central />

      <div className='conteudoLateralDireita'>
      <Direita />
      </div>
      
    </>
  );
}


export default App;
