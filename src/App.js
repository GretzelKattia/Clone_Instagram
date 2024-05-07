// import logo from './logo.svg';
import './App.css';
import Esquerda from './componentes/Esquerda/ConteudoLateralEsquerda'
import Direita from './componentes/Direita/ConteudoLateralDireita';
import Central from './componentes/Central/ConteudoCentral'
// './ConteudoLateralEsquerda';
// ../componentes/Central/ConteudoCentral
// JSX 

function App() {
  return (
    <>
      <Esquerda />
      <Central />

      <div className='conteudoLateralDireita'>
      <Direita />
      </div>
      
    </>
  );
}


export default App;
