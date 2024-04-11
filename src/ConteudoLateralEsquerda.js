import logo from './imagens/images.png';
import Menu from './TextMenu';

import { FaHome } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { BsChatFill } from "react-icons/bs";
import { TiHeartOutline } from "react-icons/ti";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { MdPerson3 } from "react-icons/md";






export default function ConteudoLateralEsquerda() {
    return (
        <div className='conteudoLateralEsquerda'>
            <img src={logo} alt='Logo' />
            <p>Exemplo de conteúdo lateral esquerda</p>
            {/* <p><FaHome fontSize={50} color='yellow' /></p> */}


            <ul>
                <Menu   nome="Home" icone={<FaHome fontSize={30}/>} />
                <Menu nome="Buscar" icone= {<FaMagnifyingGlass fontSize={30}/>}/>
                <Menu nome="Mensagens" icone= {<BsChatFill fontSize={30}/>}/>
                <Menu nome="Notificação" icone= {<TiHeartOutline fontSize={30}/>}/>
                <Menu nome="Criar" icone= {<MdOutlineCreateNewFolder fontSize={30}/>}/>


                



            </ul>
            <div className='icone_perfil'>
            <Menu nome="Perfil" icone= {<MdPerson3 fontSize={30}/>}/>
            
            </div>

        </div>
    )
}

// export default ConteudoLateralEsquerda;