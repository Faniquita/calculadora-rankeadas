import React, {useState} from 'react';
import { useParams, useNavigate } from "react-router-dom"

//Style
import './style/index.css' 
import Killjoy from '../SelecaoPersonagens/img/killjoy.png'
import Viper from '../SelecaoPersonagens/img/viper.png'
import Skye from '../SelecaoPersonagens/img/skye.png'
import Sage from '../SelecaoPersonagens/img/sage.png'
import Ferro from './img/ferro.png'
import Bronze from './img/bronze.png'
import Prata from './img/prata.png'
import Ouro from './img/ouro.png'
import Diamante from './img/diamante.png'
import Lendario from './img/lendario.png'
import Imortal from './img/imortal.png'
import Iniciante from './img/iniciante.png'

//Componentes 
import Footer from '../../components/Footer'
import Header from '../../components/Header';

const PersonagemRanking = () => {

    const {usuario, personagem} = useParams<{usuario:string, personagem:string}>()
    const[usuarioLogin, setUsuario] = useState<string>(usuario || '')
    const[personagemSelecionado, setPersonagem] = useState<string>(personagem || '')

    const[derrotas, setDerrotas] = useState<number>(0)
    const[vitorias, setVitorias] = useState<number>(0)

    const[saldoVitorias, setSaldoVitorias] = useState<number>(0)
    const[ranking, setRanking] = useState<string>('Não Rankeado')
    const[infromacaoRanking, setInfoRanking] = useState<string>('Sem informações da Rankeada')


    //Imagem do personagem selecionado
    const rankingPersonagemImagem = (personSelect:string) => {        
        if(personSelect === "Killjoy"){
            return Killjoy
        }else if(personSelect === "Viper"){
            return Viper
        }else if(personSelect === "Skye"){
            return Skye
        }else{
            return Sage
        }        
    }
    const[rankingPersonagem, setRankingPersonagem] = useState<string>(rankingPersonagemImagem(personagemSelecionado) || '')    


    //Ranking
    const returnRanking = (saldoVitoriasRankeada:number) => {
        if(saldoVitoriasRankeada >= 1 && saldoVitoriasRankeada <= 10){
            return 'Ferro' 
        }else if(saldoVitoriasRankeada >= 11 && saldoVitoriasRankeada <= 20){
            return 'Bronze'
        }else if(saldoVitoriasRankeada >= 21 && saldoVitoriasRankeada <= 50){
            return 'Prata'
        }else if(saldoVitoriasRankeada >= 51 && saldoVitoriasRankeada <= 80){
            return 'Ouro'
        }else if(saldoVitoriasRankeada >= 81 && saldoVitoriasRankeada <= 90){
            return 'Diamante'
        }else if(saldoVitoriasRankeada >= 91 && saldoVitoriasRankeada <= 100){
            return 'Lendário'
        }else if(saldoVitoriasRankeada >= 101){
            return 'Imortal'
        }else if(saldoVitoriasRankeada < 0) {
            return 'Precisa treinar mais...'
        }
    }   


    //Imagem do Ranking
    const rankingImgPersonagemSelecionado = (ranking:string) =>{
        if(ranking === 'Ferro'){
            return Ferro 
        }else if(ranking === 'Bronze'){
            return Bronze
        }else if(ranking ===  'Prata'){
            return Prata
        }else if(ranking === 'Prata'){
            return Ouro
        }else if(ranking === 'Diamante'){
            return Diamante
        }else if(ranking === 'Lendário'){
            return Lendario
        }else if(ranking === 'Imortal'){
            return Imortal
        }else{
            return Iniciante
        }
    }

    const[rankingImg, setRankingImg] = useState<string>(rankingImgPersonagemSelecionado(ranking))
    
    
    //Informações finais
    const handleSubmitCalcula = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        let saldoRankeada = vitorias - derrotas  
        let ranking = returnRanking(saldoRankeada) ?? 'Não Rankeado'

        setRanking(ranking)
        setRankingImg(rankingImgPersonagemSelecionado(ranking))
        setInfoRanking(`O Herói tem saldo de ${saldoRankeada} Vitorias e está no nível de ${ranking}`)
    }

    //Retornar a seleção de personagens
    const navigate = useNavigate()  
    const handleReturnSelectPersonagem = () =>{
        navigate(`/${usuario}/selecao-personagem`)
    }


    return(
        <>

            <Header nome={usuarioLogin} personagem={personagemSelecionado}></Header>

            <div id="content-personagem">

                <div className="personagem">
                    <img src={rankingPersonagem} alt="Personagem selecionado"></img>
                </div>
                    
                <div className="informacoes-personagem">
                    <div id="informacoes">
                        <div className='ranking'>                            
                            <p className='text-ranking'>
                                <p id="vitorias">{vitorias}</p>
                                <p>/</p>
                                <p id="derrotas">{derrotas}</p>
                            </p>        
                            <img src={rankingImg} alt="Ranking"></img>                        
                        </div>
                        <p className='info-text'>{infromacaoRanking}</p>
                    </div>       
                    <div id="form-calculadora">
                        <form className="" onSubmit={handleSubmitCalcula}>
                            <input 
                                type="number" 
                                placeholder="Vitorias"
                                onChange={(e) => setVitorias(parseInt(e.target.value))}
                            />
                            <input 
                                type="number" 
                                placeholder="Derrotas"
                                onChange={(e) => setDerrotas(parseInt(e.target.value))}
                            />
                            <button type="submit">Entrar</button>
                        </form>
                    </div>
                </div>

                
            </div>
          
            <button className='select-person' onClick={handleReturnSelectPersonagem}>Selecionar Personagem</button>

            <Footer></Footer>


        </>
    )


}

export default PersonagemRanking;