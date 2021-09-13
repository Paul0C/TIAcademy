import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home/';
import { VisualizarCliente } from './pages/Cliente/VisualizarCliente/';
import { VisualizarPedido } from './pages/Pedido/VisualizarPedido/';
import { VisualizarServico } from './pages/Servico/VisualizarServico/';
import { Menu } from './components/Menu';
import { Servico } from './pages/Servico/Servico';
import { Cliente } from './pages/Cliente/Cliente';
import { Cadastrar } from './pages/Servico/Cadastrar';
import { Editar } from './pages/Servico/Editar';
import { CadastrarCliente } from './pages/Cliente/Cadastrar';
import { EditarCliente } from './pages/Cliente/Editar';
import { Pedido } from './pages/Pedido/Pedido';
import { EditarPedido } from './pages/Pedido/Editar';
import { CadastrarPedido } from './pages/Pedido/Cadastrar';

function App() {
  return (
    <div>
      <Menu/>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/VisualizarCliente" component={VisualizarCliente} />
          <Route path="/VisualizarPedido" component={VisualizarPedido} />
          <Route path="/VisualizarServico" component={VisualizarServico} />
          <Route path="/servico/:id" component={Servico}/>
          <Route path="/cliente/:id" component={Cliente}/>
          <Route path="/pedido/:id" component={Pedido}/>
          <Route path="/cadastrarcliente" component={CadastrarCliente}/>
          <Route path="/cadastrarpedido" component={CadastrarPedido}/>
          <Route path="/cadastrarservico" component={Cadastrar}/>
          <Route path="/editarcliente/:id" component={EditarCliente}/>
          <Route path="/editarpedido/:id" component={EditarPedido}/>
          <Route path="/editarservico/:id" component={Editar}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
