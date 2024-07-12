import React, {useState} from 'react';
import { useParams } from "react-router-dom"

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
    const[infromacaoRanking, setInfoRanking] = useState<string>('N/A')

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

    const handleSubmitCalcula = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        let saldoRankeada = vitorias - derrotas  
        let ranking = returnRanking(saldoRankeada) ?? 'Não Rankeado'

        setRanking(ranking)
        setInfoRanking(`O Herói tem de saldo de ${saldoRankeada} Vitorias e está no nível de ${ranking}`)
        

    }

    return(
        <>

            <Header nome={usuarioLogin} personagem={personagemSelecionado}></Header>


            <div id="content-personagem">

                <div className="personagem"></div>
                    
                <div className="informacoes-personagem">
                    <div>
                        <p>{vitorias}/ {derrotas}</p>
                        <p>Ranking: {ranking}</p>
                        <p>{infromacaoRanking}</p>
                    </div>       
                    <div id="">
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
          

            <Footer></Footer>


        </>
    )


}

export default PersonagemRanking;