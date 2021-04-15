import React from 'react';
import { Route } from 'react-router-dom'
import Home from '../pages/Home';
import Formacao from '../pages/Formacao';
import Cursos from '../pages/Cursos';
import Experiencia from '../pages/Experiencia';
import Contato from '../pages/Contato';


const Rotas = () => {
    return (
        <>
            <Route exact path="/" >
                <Home />
            </Route>
            <Route exact path="/formacao" >
                <Formacao />
            </Route>
            <Route exact path="/cursos" >
                <Cursos />
            </Route>
            <Route exact path="/experiencia" >
                <Experiencia />
            </Route>
            <Route exact path="/contato" >
                <Contato />
            </Route>
        </>
    );
};

export default Rotas;