import React, {useState} from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import ToastAnimated, { showToast } from '../../form-utils/toastForms';

//Style
import './style/index.css';

//Components
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const SelecaoPersonagens = () => {

    const {usuario} = useParams<{usuario:string}>()

    const[usuarioLogin, setUsuario] = useState<string>(usuario || '')
    const[personagemSelecionado, setPersSelecionado] = useState<string>('')

    const navigate = useNavigate()  

    const handleSelectPersonagem = (personagem:string) => (e: any) => {
        navigate(`${personagem}`)
    }

    const handleDeslogas = () => {
        navigate("/")
    }

    return(
        <>    
            <Header nome={usuarioLogin} personagem=''></Header>

            <div className='section-personagens'>
                <div className='personagens' id='Killjoy' onClick={handleSelectPersonagem('Killjoy')}></div>
                <div className='personagens' id='Viper' onClick={handleSelectPersonagem('Viper')}></div>
                <div className='personagens' id='Skye' onClick={handleSelectPersonagem('Skye')}></div>
                <div className='personagens' id='Sage' onClick={handleSelectPersonagem('Sage')}></div>
            </div>           

            <button className='deslogar' onClick={handleDeslogas}>Sair</button>
            
            <ToastAnimated/> 
            <Footer></Footer>
        </>
    )    
}


export default SelecaoPersonagens;