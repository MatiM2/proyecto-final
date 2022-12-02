import React from "react";
import "./inicio.css";
import Carousel from "../Carousel/Carousel";


const Inicio = () => {
    return(
        <section className="contenedor-presentacion mt-5 mb-5">
        <h1 class="text-secondary text-center mb-5">NM Arquitectura</h1>
        <p className="presentacion">Somos un estudio de arquitectura joven y desafiante, que sabe entender el contexto actual e interpretar las necesidades del cliente. Estamos especializados en diseños de viviendas unifamiliares y edificios de viviendas, comerciales y espacios de trabajo, desarrollos urbanísticos y reformas integrales. Juntos lograremos el resultado deseado, con estándares de calidad altos, confort y comodidad para que tus espacios sean tal como los soñaste. Si tu meta son los emprendimientos inmobiliarios, lograremos el máximo aprovechamiento de recursos, logrando un diseño urbanístico inteligente y que también aporte calidad a su entorno.</p>
        <Carousel />
    </section>

)
}

export default Inicio;