import logo from './logo.svg';
import './App.css';
import Esquerda from './ConteudoLateralEsquerda';
// JSX 

function App() {
  return (
    <>
      <Esquerda />

      <div className='conteudoCentral'>
        {/* 
          Stories
          Feed de posts
        */}
      </div>
      
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
