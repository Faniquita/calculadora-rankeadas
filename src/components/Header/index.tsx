import React, {useState} from 'react';
import { useParams } from "react-router-dom"


//Style
import './style/index.css';
import logo from '../../img/logo.png';
import usuarioImagem from './img/usua.png'

interface HeaderProps{
    nome:string;
}

const Header:React.FC<HeaderProps> = ({nome}) => {

    return(
        <>  
            <header>
                <div className='header-usuario'>
                    <img id="usuario-img" src={usuarioImagem} alt="Usuário"></img>
                    <p>{nome}</p>
                </div>
                <div id="logo-home">                
                    <img id="text-logo" src="https://fontmeme.com/permalink/240710/0587b94636250435fcc4a247f3b1bed9.png" alt="Calculadora de Rankeada Valorant"></img>
                    <img id="simbolo-logo" src={logo} alt="Logotipo"></img>
                </div>
            </header>
            
        </>
    )
}

export default Header;