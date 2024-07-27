import React, {useEffect, useState} from 'react';
import { useParams, useNavigate} from "react-router-dom";
import $ from 'jquery';

//Style
import './style/index.css';

const NotPageFounder = () => {
    useEffect(()=>{
        $('body').addClass('Error')
        return()=>{
            $('body').removeClass('Error')
        }
    }, [])

    const navigate = useNavigate()  
    const returnInicial = () => {
        navigate("/")
    }

    return(                
        <button className='returnInicial' onClick={returnInicial}>Voltar a Tela Inicial</button>
    )
}

export default NotPageFounder;