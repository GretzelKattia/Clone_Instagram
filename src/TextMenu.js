
var xicara = {
    nome: 'Xícara',
    preco: 10.00
}

export default function TextMenu(props) {
  return (
    <li className='text-menu'>
      <span className= "separar"> {props.icone} </span>
      <span>  {props.nome} </span> 

      {/* <span className="separar1"> {props.icone1} </span> 
      <span className="nome1">  {props.nome1} </span>  */}
    </li>
  );
}