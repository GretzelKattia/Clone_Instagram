

export default function TextMenu(props) {
  return (
    <div className='container'>
      <span className= "separar"> {props.icone} </span>
      <span>  {props.nome} </span> 

      {/* <span className="separar1"> {props.icone1} </span> 
      <span className="nome1">  {props.nome1} </span>  */}
    </div>
  );
}