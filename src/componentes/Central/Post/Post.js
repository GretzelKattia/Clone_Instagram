import { useState } from "react";
import './Post.css';

import { FiMoreHorizontal } from "react-icons/fi";

import { VscHeart } from "react-icons/vsc";
import { VscHeartFilled } from "react-icons/vsc";

import { BsChat } from "react-icons/bs";

import { FiSend } from "react-icons/fi";

import { BsBookmark } from "react-icons/bs";
import { BsBookmarkStarFill } from "react-icons/bs";


import { BsEmojiWink } from "react-icons/bs";

export default function Post(props) {
    // useState é uma forma de armazenar estados dentro de um componente.
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(props.initialLikes);

  const [saves, setSaves] = useState(false);


  /*
  Arrow Functions são outra forma de criar funções em JavaScript.
  isso -> 

      var a = () => setLikes(likes + 1)
      
      é equivalente a isso 
      
      function(){
          setLikes(likes + 1);
      }

      var a = function() {}
  */

  
      // Operador ternários

      // isso -> likes % 2 === 0 ? 'black' : 'red'

      // é o mesmo que isso:

      // if(likes % 2 === 0){
      //     'black'
      // } else {
      //     'red'
  

  const toggleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  const toggleSaves = () => {
    setSaves(!saves);
    // setLikes(liked ? likes - 1 : likes + 1);
  };

  return (
    <div className="card Post">
      <header>
        <div className="card-header">
          <div className="profile">
            <img className="imagem-postagem" src={props.imgPerfil} alt="Perfil" />
            <h3>{props.title}</h3>
          </div>
          <FiMoreHorizontal fontSize={26} style={{cursor: "pointer" }}/>
        </div>
      </header>

      <div className="card-body">
        <img src={props.imgSrc} alt="Imagem" />

        <div className="card-footer">
          <div className="icons-1">
            {liked ? (
              <VscHeartFilled
                onClick={toggleLike}
                style={{ color: "red", cursor: "pointer" }}
                fontSize={26}
              />
            ) : (
              <VscHeart
                onClick={toggleLike}
                style={{ cursor: "pointer" }}
                fontSize={26}
              />
            )}

            <BsChat fontSize={25} />
            <FiSend fontSize={24} />
          </div>

          {/* <BsBookmark fontSize={23} className="salvar" /> */}
          {saves ? (
            < BsBookmarkStarFill
            onClick={toggleSaves}
            style={{color: "#ffc222", cursor: "pointer"}}
            fontSize={23}
            />
        ) : (
            < BsBookmark
            onClick={toggleSaves}
            style={{ cursor: "pointer"}}
            fontSize={23}
            />
        )
        }
        </div>

        <section className="like">
          <span>{likes} curtidas</span> {/* Exibe o número atualizado de likes */}
        </section>
                
        <div className="legend">
          <p>
            <strong>{props.title}</strong> {props.body}
          </p>
        </div>

        <div className="traductor">
          <p>Ver tradução</p>
        </div>

        <div className="comments">
          <p>Ver todos os {props.quantComments} comentários</p>
          <div className="fake-comment">
            <input placeholder="Adicione um comentário..." />
            <BsEmojiWink className="Emoji" fontSize={15} />
          </div>
          <div className="horizontal-line"></div>
        </div>
      </div>
    </div>
  );
}
