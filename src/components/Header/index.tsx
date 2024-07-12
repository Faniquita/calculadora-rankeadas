import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom"


//Style
import './style/index.css';
import logo from '../../img/logo.png';
import usuarioImagem from './img/usua.png'
import usuarioImagemKilljoy from './img/killjoy-usua.png'
import usuarioImagemViper from './img/viper-usua.png'
import usuarioImagemSkye from './img/skye-usua.png'
import usuarioImagemSage from './img/sage-usua.png'

interface HeaderProps{
    nome:string;
    personagem:string;
}

const Header:React.FC<HeaderProps> = ({nome, personagem}) => {

    const[imgPersonUsuario, setImgPersonUsuario] = useState<string>(personagem || './img/usua.png')

    useEffect(()=>{
        if(personagem === "Killjoy"){
            setImgPersonUsuario(usuarioImagemKilljoy)
        }else if(personagem === "Viper"){
            setImgPersonUsuario(usuarioImagemViper)
        }else if(personagem === "Skye"){
            setImgPersonUsuario(usuarioImagemSkye)
        }else if(personagem === "Sage"){
            setImgPersonUsuario(usuarioImagemSage)
        }else{
            setImgPersonUsuario(usuarioImagem)
        }
    }, [personagem])
    

    return(
        <>  
            <header>
                <div className='header-usuario'>
                    <img id="usuario-img" src={imgPersonUsuario} alt="Usuário"></img>                                       
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