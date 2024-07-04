import { useParams } from "react-router-dom"


const PersonagemRanking = () => {

    const {usuario, personagem} = useParams<{usuario:string, personagem:string}>()

    const[usuarioLogin, setUsuario] = useState<string>(usuario || '')
    const[personagemSelecionado, setPersonagem] = useState<string>(personagem || '')



}

export default PersonagemRanking;