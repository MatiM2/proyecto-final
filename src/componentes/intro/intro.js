import React from "react";
import "./intro.css";
import Home from "../home/home.js"
import arquitecta from "./arquitecta.jpg";

const Intro = ({ texto }) => {
    return(
        
    <div className="contenedorImagen">
        <img src={arquitecta} className="icon" alt="Foto perfil"/>
        <Home />
    </div>


    );
};


export default Intro;