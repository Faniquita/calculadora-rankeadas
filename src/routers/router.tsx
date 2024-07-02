import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";


//Rotas das Páginas
import Home from "../pages/Home"
import SelecaoPersonagem from "../pages/SelecaoPersonagens"

const Router = () => {
    return(
        <BrowserRouter>  
            <Routes>
                <Route index element={<Home/>} path="*" />
                <Route element={<SelecaoPersonagem/>} path="selecao-personagem" />
            </Routes>                
        </BrowserRouter>        
    )
}

export default Router;