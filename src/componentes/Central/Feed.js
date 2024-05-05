// import './Feed.css';

import Post from './Post/Post';

export default function Feed() {
    return (
        <div className="Feed">
            <Post


                imgPerfil= "https://i.pinimg.com/564x/a0/ce/67/a0ce67670e5f39087db4f726ac178b4b.jpg"
                title="fifizinha_"
                imgSrc="https://i.pinimg.com/564x/fb/8a/24/fb8a24d408957e55b2431b3cf0f271cb.jpg"
                // likes= "12 curtidas"
                initialLikes={62} // Passando o número inicial de likes como propriedade
                quantComments="25"
                body="Olá, pessoal! Novidade do dia: comprei um carrão rosa! 😎💅 Pronta para arrasar por aí! Quem mais tá se sentindo poderoso hoje? 🎉🐹 " />

            <Post
                imgPerfil= "https://i.pinimg.com/564x/dd/8c/71/dd8c714abc87a9fbae2a8a6120aa0b22.jpg"
                title="mickey_"
                imgSrc="https://i.pinimg.com/564x/ca/ac/19/caac19cf51d671fbd2ff7c4b254b23ca.jpg"
                // likes="31 curtidas"
                initialLikes={31} // Passando o número inicial de likes como propriedade
                quantComments="12"
                body="🐹🙈 VISH! Achei que era uma ótima ideia brincar na minha casinha... 😅" />
        </div>
    )
}