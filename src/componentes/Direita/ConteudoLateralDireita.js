import './ConteudoLateralDireita.css';
import SuggestionPerfil from './Perfil/toChange';
import InfoPeoples from './Suggestions/InfoPeoples';

export default function ConteudoLateralEsquerda() {
    return (
        <div className='ConteudoLateralDireita'>
            
            <SuggestionPerfil />
            <InfoPeoples />
            <footer>
                <p className='detalhes'>Sobre • Ajuda • Imprensa • API Carreiras • Privacidade • Termos • Localizações • Idioma • Meta Verified </p>
                <p> © 2024 INSTAGRAM FEITO POR <a href="https://github.com/GretzelKattia" target="_blank" rel="noreferrer" >GRETZEL KATTIA</a> </p>
            </footer>

        </div>
    )
}
