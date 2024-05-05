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

{/* 
          Login
          Sugestões de amigos
          Sugestões de contas
          Sugestões de hashtags
          Sugestões de locais
          Sugestões de posts patrocinados
          Link legais
        */}

export default App;
