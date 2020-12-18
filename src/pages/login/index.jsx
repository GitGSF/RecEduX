import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap'
import logo from '../login/rec.png'
import { useFirebaseApp } from 'reactfire';
import './index.css'


const Login = () => {
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
                <a className="texto1">Login</a>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email" value={email} onChange={event => setEmail(event.target.value)} required/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label></Form.Label>
                    <Form.Control type="password" placeholder="Senha" value={senha} onChange={event => setSenha(event.target.value)} required/>

                </Form.Group>

                <Button variant="primary" type="submit">
                    Entrar
                </Button>
                <br /><br />
                <a href='/cadastrar' style={{ marginTop: '30px' }}>Esqueci minha senha</a>
                <Button variant="secondary" type="submit">
                    Cadastrar
                </Button>
            </div>
        </Form>
    </Container>
    )

}
export default Login;