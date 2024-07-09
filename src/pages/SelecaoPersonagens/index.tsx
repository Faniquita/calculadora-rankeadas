import React, {useState} from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import ToastAnimated, { showToast } from '../../form-utils/toastForms';

//Style
import './style/index.css';

//Components
import Footer from '../../components/Footer';

const SelecaoPersonagens = () => {

    const {usuario} = useParams<{usuario:string}>()

    const[usuarioLogin, setUsuario] = useState<string>(usuario || '')
    const[personagemSelecionado, setPersSelecionado] = useState<string>('')

    const navigate = useNavigate()  

    const handleSelectPersonagem = (personagem:string) => (e: any) => {
        navigate(`${personagem}`)
    }

    return(
        <>
            <div className='header-usuario'>{usuarioLogin}</div>
            <div className='header-title'>
                <img></img>
            </div>
            <div className='section-personagens'>
                <div className='personagens' id='Kulljoy' onClick={handleSelectPersonagem('Kulljoy')}></div>
                <div className='personagens' id='Viper' onClick={handleSelectPersonagem('Viper')}></div>
                <div className='personagens' id='Skye' onClick={handleSelectPersonagem('Skye')}></div>
                <div className='personagens' id='Sage' onClick={handleSelectPersonagem('Sage')}></div>
            </div>           
            
            <ToastAnimated/> 
            <Footer></Footer>
        </>
    )    
}


export default SelecaoPersonagens;