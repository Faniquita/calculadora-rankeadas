import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import ToastAnimated, { showToast } from '../../form-utils/toastForms';

//Style
import './style/index.css';

//Components
import Footer from '../../components/Footer';

const SelecaoPersonagens = (usuario) => {


    return(
        <>
            
            
            <ToastAnimated/> 
            <Footer></Footer>
        </>
    )    
}


export default SelecaoPersonagens;