import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {Alert, Button, Container, Form, FormGroup, Input, Label, Spinner} from 'reactstrap';
import { api } from '../../../config';

export const EditarPedido = (props) => {

    const [id] = useState(props.match.params.id);
    const[ClienteId, setClienteid] = useState('');
    const[ServicoId, setServicoid] = useState('');
    const[valor, setValor] = useState('');
    const[data, setData] = useState('');


    const [status, setStatus] = useState({
        formSave: false,
        type:'',
        message:''

    })

    const edtPedido = async e =>{
        e.preventDefault();
        console.log("Editar");

        setStatus({
            formSave:true
        });

        const headers = {
            'Content-Type':'application/json'
        }

        await axios.put(api+"/editarpedido",{ClienteId,ServicoId,valor,data}, {headers})
        .then((response)=>{
            console.log(response.data.error);
            console.log(response.data.message);
            setStatus({
                formSave:false
            });
        })
        .catch(()=>{
            setStatus({
                formSave:false,
                type: 'error',
                message: 'Erro: Não foi possível conectar a API.'
            })
        })
    }

    useEffect(()=>{
        const getPedido = async () =>{
            await axios.get(api+"/pedidoss/"+id)
            .then((response)=>{
                setClienteid(response.data.pedido.ClienteId);
                setServicoid(response.data.pedido.ServicoId);
                setValor(response.data.pedido.valor);
                setData(response.data.pedido.data);
            })
            .catch(()=>{
                console.log("Erro: Não foi possível conectar a API");
            });
        }
        getPedido();
    },[id]);

    return (
        <div>
            <Container>
                <div className="d-flex">
                        <div className="mr-auto p-2">
                            <h1>Editar um pedido</h1>
                        </div>
                        
                        <div>
                            <Link to={"/visualizarpedido/"}
                                className="btn btn-outline-warning btn-sm">Editar</Link>
                            <Link to={"/pedido/"+id}
                                className="btn btn-outline-warning btn-sm">Consultar</Link>
                        </div>
                </div>
                
                <hr className="m-1"/>

                {status.type === 'error' ? <Alert color="danger">{status.message}</Alert>:""}

                {status.type === 'sucess' ? <Alert color="sucess">{status.message}</Alert>:""}

                <Form className="p-2" onSubmit={edtPedido}>
                    <FormGroup className="p-2">
                            <Label>ClienteId</Label>
                            <Input type="text" name="ClienteId" placeholder="ClienteId do Pedido" value={ClienteId}
                            onChange={e => setClienteid(e.target.value)}/>
                    </FormGroup>

                    <FormGroup className="p-2">
                            <Label>ServicoId</Label>
                            <Input type="text" name="ServicoId" placeholder="ServicoId do Pedido" value={ServicoId}
                            onChange={e => setServicoid(e.target.value)}/>
                    </FormGroup>

                    <FormGroup className="p-2">
                            <Label>Valor</Label>
                            <Input type="text" name="Valor" placeholder="Valor do Pedido" value={valor}
                            onChange={e => setValor(e.target.value)}/>
                    </FormGroup>

                    <FormGroup className="p-2">
                            <Label>Data</Label>
                            <Input type="text" name="Data" placeholder="Data do Pedido" value={data}
                            onChange={e => setData(e.target.value)}/>
                    </FormGroup>

                    {status.formSave ? 
                    <Button type="submit" outline color="warning" disabled>Salvando...
                        <Spinner size="sm" color="warning" /></Button>:
                    <Button type="submit" outline color="warning">Salvar</Button>}
                    {/* <Button type="reset" outline color="warning m-1">Limpar</Button> */}
                </Form>

            </Container>
        </div>
    )  
}                  