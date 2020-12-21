import React, { useDebugValue, useEffect, useState } from 'react';
import { Container, Card, Button, Form, Table } from 'react-bootstrap';
import { db } from '../../utils/firebaseConfig'
import logo from '../login/rec.png'

import './index.css';

const Tarefas = () => {
    const [tarefas, setTarefas] = useState([]);
    const [id, setId] = useState(0);
    const [nome, setNome] = useState('');
    const _dbTarefas = db.collection('tarefas');

    useEffect(() => {
        listarTarefas();
    }, [])

    const listarTarefas = (event) => {
        //obter dados da coleção de eventos
        try {
            _dbTarefas
            .get()
            .then( result => {
                console.log('Collection Tarefas', result.docs)
                const data = result.docs.map(doc => {
                    return{
                        id : doc.id,
                        nome : doc.data().nome,
                    }
                });
                setTarefas(data);
            })
            .catch(error => console.error(error))

        } catch (error) {
            console.error(error);
        }
    }
    const editar = (event) => {
        event.preventDefault();

        try {
            _dbTarefas
                .doc(event.target.value)
                .get()
                .then(result =>{
                    setId(result.id);
                    setNome(result.data().nome);
                })

        } catch (error) {

        }

    }
    const remover = (event) => {
        event.preventDefault();

        try {
            _dbTarefas
                .doc(event.target.value)
                .delete()
                .then(() => {
                    alert('Tarefa Removida');
                    listarTarefas();
                    limparCampos();
                })
                .catch(error => {
                    console.log(error)
                })

        } catch (error) {
            console.log(error)
        }

    }
    const salvar = (event) => {
        event.preventDefault();

        try {
            const tarefa = {
                nome : nome,
            }
            if(id === 0){
                // Add tarefa 
                _dbTarefas
                    .add(tarefa)
                    .then(() => {
                        alert('Tarefa cadastrada');
                        listarTarefas();
                        limparCampos();
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }else {
                _dbTarefas
                    .doc(id)
                    .set(tarefa)
                    .then(() =>{
                        alert('Tarefa alterada');
                        listarTarefas();
                        limparCampos();
                    })
            }
        } catch (error) {
            console.log(error)
        }

    }
    const limparCampos = () => {
        setId(0);
        setNome('');
    }
    


    return(
        <Container>
            <div className="header">
                <img src={logo} alt='EduX' style={{ width: '64px' }} />
                <Button variant='sair' type="submit" >Sair</Button>
                </div>
                <h1 variant='titulo'>Tarefas</h1>
                <p>Gerencie suas tarefas</p>
                <Card>
                        <Card.Body>
                        <Form onSubmit={event => salvar(event)}>
                            <Form.Group variant ='textarefa' controlId="textTarefa">
                                <Form.Control type="textTarefa" value={nome} onChange={event => setNome(event.target.value)} />
                            </Form.Group>
                            
            

                            <Button variant ='salvar'type="submit" >Salvar</Button>
                        </Form>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                        <Table bordered>
                            <thead>
                                <tr>
                                    <th>Tarefas:</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    tarefas.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.nome}</td>
                                        
                                            <td>
                                                <Button type="button" variant="warning" value={item.id} onClick={ event => editar(event)}>Editar</Button>
                                                <Button type="button" variant="danger" value={item.id} style={{ marginLeft : '30px'}} onClick={ event => remover(event)}>Remover</Button>
                                            </td>
                                        </tr>
                                    )
                                    })
                                }
                            </tbody>
                        </Table>
                        </Card.Body>
                    </Card>
            </Container>
    )

}

export default Tarefas;