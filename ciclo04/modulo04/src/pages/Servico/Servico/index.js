import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import { Container } from "reactstrap";
import { api } from "../../../config";


export const  Servico = (props) => {
    console.log(props.match.params.id)

    const [data, setData] = useState([]);
    const [id, setId] = useState(props.match.params.id);

    useEffect(()=>{
        const getServico = async()=>{
            await axios.get(api+"/servico/"+id)
            .then((response)=>{
                console.log(response.data.servico);
                setData(response.data.servico);
            })
            .catch(()=>{
                console.log("Erro: Não foi possiível conectar a API.")
            })
        }
        getServico();
    },[id]);

    return (
        <div>
            <Container>
                    <div className="d-flex">
                        <div className="mr-auto p-2">
                            <h1>Informações do serviço</h1>
                        </div>
                        <div className="p-2">
                            <Link to="/Visualizarservico"
                                className="btn btn-outline-primary btn-sm m-1">
                                 Serviço
                            </Link>
                            <Link to={"/editarservico/"+data.id}
                            className="btn btn-outline-warning btn-sm">Editar</Link>
                        </div>                         
                    </div>
                    <div>
                                <dl className="row">
                                    <dt className="col-sm-3">Nome</dt>
                                    <dd className="col-sm-9">{data.nome}</dd>
                                </dl>
                                <dl className="row">
                                    <dt className="col-sm-3">Descrição</dt>
                                    <dd className="col-sm-9">{data.descricao}</dd>
                                </dl>
                        </div>                            
            </Container>
        </div>
         
    )
}