import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";


//Rotas das Páginas
import Home from "../pages/Home"
import SelecaoPersonagem from "../pages/SelecaoPersonagens"
import PersonagemRanking from "../pages/PersonagemRanking";
import NotPageFounder from "../pages/NotPageFounder"

const Router = () => {
    return(
        <BrowserRouter>  
            <Routes>
                <Route element={<Home/>} path="/" />
                <Route index element={<SelecaoPersonagem/>} path=":usuario/selecao-personagem" />
                <Route index element={<PersonagemRanking/>} path=":usuario/selecao-personagem/:personagem" />
                <Route index element={<NotPageFounder/>} path="*" />
            </Routes>                
        </BrowserRouter>        
    )
}

export default Router;