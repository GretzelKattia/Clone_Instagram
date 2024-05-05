// import Story from "./Story"
// import './Stories.css'
import PeopleSuggestion from "./PeopleSuggestion"
import './InfoPeople.css'


var ListaSugestoes = [
    {
        SuggestionImgPerfil: "https://i.pinimg.com/564x/2a/cb/9e/2acb9e693fc65a1be4d43f60f2ad3e73.jpg",
        SuggestionAtPerfil : "naninha",
        SuggestionNamePerfil: "Nina"
    },
    {
        SuggestionImgPerfil: "https://i.pinimg.com/736x/9b/66/7f/9b667f5535a98b8df44530e0c4840579.jpg",
        SuggestionAtPerfil :"Mickey_",
        SuggestionNamePerfil: "Mic_"
    },
    {
        SuggestionImgPerfil: "https://i.pinimg.com/564x/c6/4f/69/c64f690f93a94e2dcc1214e1f1bbad16.jpg",
        SuggestionAtPerfil :"Redondinha_",
        SuggestionNamePerfil: "Red_"
    },
    {
        SuggestionImgPerfil: "https://i.pinimg.com/564x/e1/34/a9/e134a9996ba797137b5dee1323f13d3d.jpg",
        SuggestionAtPerfil :"Ohh_King",
        SuggestionNamePerfil: "Kink"
        // SuggestionAtPerfil :"Suggestions for you",

    }

]

export default function InfoPeoples() {
    return (
    <div className="InfoPeoples">
        {ListaSugestoes.map((suggestion) => {
            return <PeopleSuggestion 
                sugestaoCaminhoDaImagem={suggestion.SuggestionImgPerfil} 
                sugestaoNomeUsuario={suggestion.SuggestionNamePerfil} 
                sugestaoAtPerfil={suggestion.SuggestionAtPerfil} 
            />
        })
        }
    </div>
    )
}