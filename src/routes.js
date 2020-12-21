import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from './pages/login'
import Cadastrar from './pages/cadastrar'
import Tarefas from './pages/tarefas'

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component ={Login}/>
                <Route path="/cadastrar" component ={Cadastrar}/>
                <Route path="/tarefas" component ={Tarefas}/>

            </Switch>
        </BrowserRouter>    
    );
};

export default Routes;