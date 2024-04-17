// import logo from './logo.svg';
import './App.css';
import Esquerda from './componentes/Esquerda/ConteudoLateralEsquerda'
// import Direita from './ConteudoLateralDireita';
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
        {/* 
          Login
          Sugestões de amigos
          Sugestões de contas
          Sugestões de hashtags
          Sugestões de locais
          Sugestões de posts patrocinados
          Link legais
        */}
      </div>
    </>
  );
}

export default App;
