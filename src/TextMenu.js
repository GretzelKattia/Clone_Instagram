import '../src/componentes/Esquerda/ConteudoLateralEsquerda.css';

export default function TextMenu(props) {
  return (
    <li className='menu-item'>
      <span className="menu-icon">{props.icone}</span>
      <span className="menu-text">{props.nome}</span> 
    </li>
  );
}