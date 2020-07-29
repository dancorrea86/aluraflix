import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import App from './pages/Home/App';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Desafio master blaster na descrição
const Pagina404 = () => (<div>Página 404</div>)

ReactDom.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact/>
            <Route path="/cadastro/video" component={App} />
            <Route component={Pagina404} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);