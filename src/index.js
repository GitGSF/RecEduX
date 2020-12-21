import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import firebaseConfig from './utils/firebaseConfig'
import {FirebaseAppProvider} from 'reactfire'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';


import Login from './pages/login';
import Cadastrar from './pages/cadastrar';
import Tarefas from './pages/tarefas';
import EsqueciSenha from './pages/esqueci-senha';

//CSS aplicação

import '../src/pages/login/index.css';

const routing = (
  <Router>
    <div>
        <Switch>
          <Route exact path='/' component ={Login} />
          <Route path='/cadastrar' component ={Cadastrar} />
          <Route path='/tarefas' component ={Tarefas} />
          <Route path='/esqueci-senha' component={EsqueciSenha} />
        </Switch>
    </div>
  </Router>
)

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <EsqueciSenha />
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
