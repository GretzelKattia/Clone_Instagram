import { useState, useEffect } from "react"; // Adicionei useEffect aqui
import "./Post.css";
import { FiMoreHorizontal } from "react-icons/fi";
import { VscHeart } from "react-icons/vsc";
import { VscHeartFilled } from "react-icons/vsc";
import { BsChat } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { BsBookmark } from "react-icons/bs";
import { BsBookmarkStarFill } from "react-icons/bs";
import { BsEmojiWink } from "react-icons/bs";

export default function Post(props) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(props.initialLikes);
  const [saves, setSaves] = useState(false);
  const [pulsing, setPulsing] = useState(false);

  const toggleLike = () => {
    const newLiked = !liked;
    setLiked(newLiked);
    setLikes(newLiked ? likes + 1 : likes - 1);

    if (newLiked) {
      setPulsing(true);
    }
  };

  // Adicionei a função toggleSaves que estava faltando
  const toggleSaves = () => {
    setSaves(!saves);
  };

  useEffect(() => {
    if (pulsing) {
      const timer = setTimeout(() => {
        setPulsing(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [pulsing]);

  return (
    <div className="card Post">
      <header>
        <div className="card-header">
          <div className="profile">
            <img
              className="imagem-postagem"
              src={props.imgPerfil}
              alt="Perfil"
            />
            <h3>{props.title}</h3>
          </div>
          <FiMoreHorizontal fontSize={26} style={{ cursor: "pointer" }} />
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
                className={`heart-icon ${pulsing ? "pulse" : ""}`}
              />
            ) : (
              <VscHeart
                onClick={toggleLike}
                style={{ cursor: "pointer" }}
                fontSize={26}
                className="heart-icon"
              />
            )}

            <BsChat fontSize={25} />
            <FiSend fontSize={24} />
          </div>

          {saves ? (
            <BsBookmarkStarFill
              onClick={toggleSaves} // Agora toggleSaves está definido
              style={{ color: "#ffc222", cursor: "pointer" }}
              fontSize={23}
            />
          ) : (
            <BsBookmark
              onClick={toggleSaves} // Agora toggleSaves está definido
              style={{ cursor: "pointer" }}
              fontSize={23}
            />
          )}
        </div>

        <section className="like">
          <span>{likes} curtidas</span>
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
