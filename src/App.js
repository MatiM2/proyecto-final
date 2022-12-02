import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './componentes/navbar/navbar';
import Inicio from './componentes/inicio/inicio';
import Contacto from './componentes/contacto/contacto';
import Servicios from './componentes/servicios/servicios';
import Intro from './componentes/intro/intro';
import Footer from './componentes/Footer/Footer';
import { BrowserRouter, Route, Switch } from "react-router-dom";


function App() {
  return (

    <BrowserRouter className="body">
      <Navbar />
        <Switch>
          <Route exact path="/">
            <Inicio />
            <Servicios />  
            <Intro />
          </Route>
          <Route exact path="/contacto">
            <Contacto/>
            <Servicios />
          </Route>
        </Switch>

    
    <Footer />
    </BrowserRouter>

            

  );
}

export default App;
