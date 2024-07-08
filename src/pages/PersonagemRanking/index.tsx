import React, {useState} from 'react';
import { useParams } from "react-router-dom"


const PersonagemRanking = () => {

    const {usuario, personagem} = useParams<{usuario:string, personagem:string}>()

    const[derrotas, setDerrotas] = useState<number>(0)
    const[vitorias, setVitorias] = useState<number>(0)

    const handleSubmitCalcula = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert('houve ' + derrotas + 'derrotas e ' + vitorias + ' vitorias')
    }

    return(
        <>
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
        </>
    )


}

export default PersonagemRanking;