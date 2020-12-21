import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap'
import { Switch, Route, Link } from 'react-router-dom'
import logo from '../login/rec.png'
import { auth, useFirebaseApp } from 'reactfire';
import './index.css'
import { Alert } from 'bootstrap';
import firebase from 'react-fire'
import './index.css'

const EsqueciSenha = () => {
    const firebase = useFirebaseApp();
    const [email, setEmail] = useState('');

    const recuperar = () => {
        if (email !== '') {
            console.log(email);
            auth()
                .sendPasswordResetEmail(email)
                .then(function () {
                    console.log(email);
                    alert('Email de recuperação enviado!')
                })
                .catch (error => {
                alert('Email inválido')
                console.error(error);
            });
        }
    }

return (
    <Container className='form-height'>
        <Form className='form-signin' onSubmit={event => recuperar(event)} >
            <div className='text-center'>
                <img src={logo} alt='EduX' style={{ width: '64px' }} />
                <a className="texto1">Esqueci a senha</a>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email" value={email} onChange={event => setEmail(event.target.value)} required />
                </Form.Group>


                <Button href="" variant="primary" type="submit">
                    Enviar
                </Button>
                <br /><br />
                <Button href="" variant="secondary" type="submit">
                    Já tenho Conta
                </Button>
            </div>
        </Form>
    </Container>
)

    }
export default EsqueciSenha;