import logo from '../../imagens/images.png';
import Menu from '../../TextMenu';
import './ConteudoLateralEsquerda.css';

import { FaHome } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { LuMessageCircle } from "react-icons/lu";

import { TiHeartOutline } from "react-icons/ti";
import { MdOutlineExplore } from "react-icons/md";
import { PiVideoFill } from "react-icons/pi";


import { MdOutlineCreateNewFolder } from "react-icons/md";
import { MdPerson3 } from "react-icons/md";






export default function ConteudoLateralEsquerda() {
    return (
        <div className='conteudoLateralEsquerda'>
            <img className='imagemInstagram' src={logo} alt='Logo' />
            {/* <p>Exemplo de conteúdo lateral esquerda</p> */}
            {/* <p><FaHome fontSize={50} color='yellow' /></p> */}


            <ul>
                <Menu   nome="Home" icone={<FaHome fontSize={25}/>} />
                <Menu nome="Pesquisar" icone= {<FaMagnifyingGlass fontSize={20}/>}/>
                <Menu nome="Pesquisar" icone= {<MdOutlineExplore fontSize={25}/>}/>

                <Menu nome="Mensagens" icone= {<LuMessageCircle fontSize={25}/>}/>
                <Menu nome="Notificação" icone= {<TiHeartOutline fontSize={25}/>}/>
                <Menu nome="Criar" icone= {<MdOutlineCreateNewFolder fontSize={25}/>}/>
                <Menu nome="Reels" icone= { <PiVideoFill fontSize={25}/>}/>

                <div className='icone_perfil'>
            <Menu nome="Perfil" icone= {<MdPerson3 fontSize={30}/>}/>
            
            </div>

            </ul>

        </div>
    )
}

// export default ConteudoLateralEsquerda;