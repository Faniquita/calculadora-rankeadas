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
                <div className='personagens' onClick={handleSelectPersonagem('Kulljoy')}>Kulljoy</div>
                <div className='personagens' onClick={handleSelectPersonagem('Viper')}>Viper</div>
                <div className='personagens' onClick={handleSelectPersonagem('Skye')}>Skye </div>
                <div className='personagens' onClick={handleSelectPersonagem('Sage')}>Sage</div>
            </div>           
            
            <ToastAnimated/> 
            <Footer></Footer>
        </>
    )    
}


export default SelecaoPersonagens;