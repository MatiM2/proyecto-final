import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import "./contacto.css"



function ContactForm() {
const [state, handleSubmit] = useForm("xoqbplwb");
if (state.succeeded) {
return <p className="confirmacion-form">Nos pondremos en contacto a la brevedad. Saludos!</p>;
}
return (
<section className='contenedor-form'>
    <h2 className="titulo-form"> Contáctanos </h2>
      <form onSubmit={handleSubmit} className="form">
        <div >
            <input className='input' type="text" name="nombre" placeholder="Nombre:" required />
        </div>
        <div>
            <input className='input' type="text" name="apellido" placeholder="Apellido:" required />
        </div>
        <div>
            <input className='input' id="email" type="email" name="email" placeholder="Email:" required />
            <ValidationError field="email" prefix="Email" errors={state.errors} />
        </div>
        <div>
            <label> Tipo de Servicio solicitado: </label>
            <select className="select">
                <option value="Proyecto y dirección de obra"> Proyecto y dirección de obra </option>
                <option value="Construcción"> Construcción</option>
                <option value="Reformas"> Reformas </option>
                <option value="Diseño de interioresm"> Diseño de interiores </option>
            </select>
        <div>
            <label for="mensaje"> Qué estás buscando? :</label>
            <textarea name="mensaje"  id="mensaje" cols="60" rows="5" placeholder="aa" required> </textarea>
        </div>
        </div>

      <button className="boton" type="submit" disabled={state.submitting}>
        Enviar
      </button>
    </form>

    </section> 
  );
}
function App() {
  return (
    <ContactForm />
  );
}
export default App;