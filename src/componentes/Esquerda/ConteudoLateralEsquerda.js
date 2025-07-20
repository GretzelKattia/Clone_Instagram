import logo from '../../imagens/images.png';
import Menu from '../../TextMenu';
import './ConteudoLateralEsquerda.css';

import { FaInstagram } from "react-icons/fa";

import { GoHomeFill } from "react-icons/go";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { RiMessengerLine } from "react-icons/ri";

import { TiHeartOutline } from "react-icons/ti";
import { MdOutlineExplore } from "react-icons/md";
import { PiVideoFill } from "react-icons/pi";


import { BsPlusSquare } from "react-icons/bs";
import { MdPerson3 } from "react-icons/md";

export default function ConteudoLateralEsquerda() {
    return (
        <div className='conteudoLateralEsquerda'>
            {/* Logo normal para desktop */}
            <img className='imagemInstagram' src={logo} alt='Logo' />
            
            {/* Ícone para mobile - inicialmente escondido */}
            {/* <Menu nome="Instagram" icone={<FaInstagram className='iconeInstagramMobile' />} /> */}
            <FaInstagram className='iconeInstagramMobile' />
            <ul>
                <strong>
                    <Menu nome="Home" icone={<GoHomeFill fontSize={30} />}/>
                </strong>
                <Menu nome="Pesquisar" icone={<FaMagnifyingGlass fontSize={25}/>}/>
                <Menu nome="Reels" icone={<PiVideoFill fontSize={30}/>}/>
                <Menu nome="Mensagens" icone={<RiMessengerLine fontSize={30}/>}/>
                
                <div className="desktop-only">
                    <Menu nome="Explorar" icone={<MdOutlineExplore fontSize={30}/>}/>
                    <Menu nome="Notificação" icone={<TiHeartOutline fontSize={30}/>}/>
                    <Menu nome="Criar" icone={<BsPlusSquare fontSize={25}/>}/>
                </div>
                
                <div className='icone_perfil'>
                    <Menu nome="Perfil" icone={<MdPerson3 fontSize={30}/>} 
                          style={{ transition: 'transform 0.3s ease-in-out', cursor: 'pointer' }}/>
                </div>
            </ul>
        </div>
    )
}