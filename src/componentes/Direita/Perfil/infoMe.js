import './info.css';


export default function Infos(props) {
    return (
        <div className="container-suggestion">
        <div className="header-suggestion" >
            <img src={props.SuggestionImgPerfil} alt= "sugestões de perfil" />

            <div className="user-infos-suggestion" >

                <div className="infos" >
                    <span className="suggestion-@"> {props.SuggestionAtPerfil}</span>
                    <p className="suggestion-nome-perfil">{props.SuggestionNamePerfil}</p>
                </div>

                <p className="mudarConta">Switch</p>

            </div>
        </div>
        <div className="header-main-suggestion" >

    <p className="suggestionPeople">Sugestões para você</p>

    <span>Ver tudo</span>

    </div>
        </div>
        
    )

}
