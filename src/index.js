import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import firebaseConfig from './utils/firebaseConfig'
import {FirebaseAppProvider} from 'reactfire'

import Login from './pages/login';
import Cadastrar from './pages/cadastrar';
import Tarefas from './pages/tarefas';

//CSS aplicação
import './pages/login/index.css';

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Tarefas />
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
