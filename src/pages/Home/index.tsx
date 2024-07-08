import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ToastAnimated, { showToast } from '../../form-utils/toastForms';

//Style
import './style/index.css';

//Components
import Footer from '../../components/Footer';

const Home = () => {

    const [usuario, setUsuario] = useState<string>('')

    const navigate = useNavigate()   

    const handleSubmiteLogin = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()    

        //Validação do campo para "Login"
        if(!usuario){
            showToast({typeToast:"failed", messageToast:"Nome de Usúario invalido!"})
            return false
        }else{
            showToast({typeToast:"success", messageToast:"Seja bem vindo(a) " + usuario})            
            setTimeout(() => {
                selecaoPersonagem(usuario)
            }, 2500)            
        }
    }

    const selecaoPersonagem = (usuario:string) => {             
        navigate(`${usuario}/selecao-personagem`)
    }

    return(
        <>
            <div id="usuario">
                <form className="page-ini" onSubmit={handleSubmiteLogin}>
                    <input 
                        type="text" 
                        placeholder="Nome de Usuário"
                        onChange={(e) => setUsuario(e.target.value)}
                    />
                    <button type="submit">Entrar</button>
                </form>
            </div>
            <ToastAnimated/> 
        </>
    )
}

export default Home;