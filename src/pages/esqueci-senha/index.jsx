import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap'
import { Switch, Route , Link} from 'react-router-dom'
import logo from '../login/rec.png'
import { useFirebaseApp } from 'reactfire';
import './index.css'

const EsqueciSenha = () => {
    const firebase = useFirebaseApp();

    const [email, setEmail ] = useState('');
    const [senha, setSenha] = useState('')
    
    const Logar = (event) => {
        event.preventDefault();

        console.log(`${email} - ${senha}`);

        firebase.auth().signInWithEmailAndPassword(email, senha)
        .then(result => {
            console.log(result);
            localStorage.setItem('edux-firebase', result.user.refreshToken);
            alert('Login realizado , seja bem vindo!')
        })
        .catch(error => {
            alert('Email ou senha inválidos')
            console.error(error);
        })
    
    }
    return (
        <Container className='form-height'>
        <Form className='form-signin' onSubmit={event => Logar(event)} >
            <div className='text-center'>
                <img src={logo} alt='EduX' style={{ width: '64px' }} />
                <a className="texto1">Esqueci a senha</a>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email" value={email} onChange={event => setEmail(event.target.value)} required/>
                </Form.Group>


                <Button variant="primary" type="submit">
                    Enviar
                </Button>
                <br /><br />
                <Button variant="secondary" type="submit">
                    Já tenho Conta
                </Button>
            </div>
        </Form>
    </Container>
    )

}
export default EsqueciSenha;