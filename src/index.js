import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import Home from './pages/Home';


import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video'

// Desafio master blaster na descrição
const Pagina404 = () => (<div>Página 404</div>)

ReactDom.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/cadastro/video" component={CadastroVideo} />
            <Route component={Pagina404} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);