const express=require('express');
const cors=require('cors');

const models=require('./models');

const app=express();
app.use(cors());
app.use(express.json());

let cliente=models.Cliente;
let servico=models.servico;
let pedido=models.Pedido;

app.get('/', function(req,res){
    res.send('Olá mundo!');
})

app.get('/cliente', function(req,res){
    res.send('Lista de clientes');
})

app.get('/servico', function(req,res){
    res.send('Lista de serviços');
})

app.get('/pedido', function(req,res){
    res.send('Lista de pedidos');
})

//Desafio Aula 02
//Inserir 5 novos clientes
app.post('/clientes', async(req,res)=>{
    let create = await cliente.create(
       req.body
    );
    res.send('Cliente foi inserido!');
});

//Inserir 10 novos pedidos
app.post('/pedidos', async(req,res)=>{
    let create = await pedido.create( 
        req.body
    );
    res.send('Pedido foi inserido');
});

app.post('/servicos', async(req,res)=>{

    await servico.create(
        req.body
   );
   res.send('Serviço foi inserido!');

    await aguardar(3000);

    function aguardar(ms){
        return new Promise((resolve)=>{
            setTimeout(resolve.ms);
        });
    };

     
});

app.post('/pedidoss', async(req,res)=>{

    await pedido.create(
        req.body
   );
   res.send('Pedido foi inserido!');

    await aguardar(3000);

    function aguardar(ms){
        return new Promise((resolve)=>{
            setTimeout(resolve.ms);
        });
    };

     
});

app.get('/listaservicos', async(req,res)=>{
    await servico.findAll({
        order:[['nome','DESC']]
    }).then(function(servicos){
        res.json({servicos})
    });
});

app.get('/ofertas', async(req,res)=>{
    await servico.count('id')
    .then(function(servicos){
        res.json(servicos);
    });

});

app.get('/servico/:id', async(req,res)=>{
    servico.findByPk(req.params.id)
    .then(servico=>{
        return res.json({
            error:false,
            servico
        }).catch(function(erro){
            return res.status(400).json({
            error:true,
            message:"Código não está cadastrado"
            });
        });
    });
});

app.get("/cliente/:id", async (req, res) => {
    cliente
      .findByPk(req.params.id)
      .then((cliente) => {
        return res.json({
          error: false,
          cliente,
        });
      })
      .catch(function (erro) {
        return res.status(400).json({
          error: true,
          message: "Código não cadastrado!",
        });
      });
  });

  app.get("/cliente/:id", async (req, res) => {
    cliente
      .findByPk(req.params.id)
      .then((cliente) => {
        return res.json({
          error: false,
          cliente,
        });
      })
      .catch(function (erro) {
        return res.status(400).json({
          error: true,
          message: "Código não cadastrado!",
        });
      });
  });

  app.get("/pedidoss/:id", async (req, res) => {
    pedido
      .findByPk(req.params.id)
      .then((pedido) => {
        return res.json({
          error: false,
          pedido,
        });
      })
      .catch(function (erro) {
        return res.status(400).json({
          error: true,
          message: "Código não cadastrado!",
        });
      });
  });

//Lista clientes
app.get('/listaclientes', async (req, res) => {
    /*
    await cliente.findAll({
        order:[['nome','DESC']]
    }).then(function(servicos){
        res.json({servicos})
    });*/
    
    await cliente.findAll({
        raw: true
    }).then((cliente) => {
        res.json({
            cliente
        })
    });
});

//Lista clientes antigo
app.get('/listaclientesAntigo', async (req, res) => {
    await cliente.findAll({
        order : [['createdAt','ASC']]
    }).then((cliente) => {
        res.json({
            cliente
        })
    });
});

//Total de cliente
app.get('/totalcliente', async (req, res) => {
    await cliente.count('id').then((cliente) => {
        res.json(cliente)
    });
});


//Lista de pedidos
app.get('/listapedidos', async (req, res) => {
    await pedido.findAll({
        raw : true
    }).then((pedido) => {
        res.json({
            pedido,
        });
    });
});

//Pedido ordenado
app.get("/pedidomaior", async (req, res) => {
    await pedido
      .findAll({
        order: [["valor", "DESC"]],
      })
      .then((pedido) => {
        res.json({
          pedido,
        });
      });
  });


//Quantidade de pedidos  
app.get('/totalpedidos', async (req, res) => {
    await pedido.count('id').then((pedido) => {
        res.json(pedido)
    });
});

//Desafio aula 03
app.get('/pedido/:id', async (req, res) => {
    await pedido.sum('valor', {where: {ClienteId:req.params.id} })
        .then((pedido)=>{
            return res.json({
                pedido
            })
        });
});

app.get('/atualizaservico', async (req, res) =>{
    await servico.findByPk(1)
    .then(servico =>{
        servico.nome='HTML/CSS/JS';
        servico.descricao='Páginas estáticas e dinâmicas estilizadas';
        servico.save();
       return res.json({servico});
    });
});

app.put('/editarservico', (req, res)=>{
    servico.update(req.body,{
        where: {id: req.body.id}
    }).then(function(){
        return res.json({
            error:false,
            message:"Serviço foi alterado com sucesso."
        });
    }).catch(function(erro){
        return res.status(400).json({
            error:true,
            message:"Erro na alteração do serviço."
        });
    });
});

app.get('/servicospedidos', async(req, res)=>{
    await servico.findByPk(1, {
        include:[{all:true}]
    }).then(servico =>{
        return res.json({servico});
    }) 
});

app.put('/editarpedido', (req, res)=>{
    pedido.update(req.body,{
        where: {ServicoId: req.body.ServicoId}
    }).then(function(){
        return res.json({
            error:false,
            message:"Pedido foi modificado com sucesso."
        });
    }).catch(function(erro){
        return res.status(400).json({
            error:true,
            message:"Não foi possível modificar o pedido."
        })
    })
})

app.put('/editarpedidoss', (req, res)=>{
    pedido.update(req.body,{
        where: {id: req.body.id}
    }).then(function(){
        return res.json({
            error:false,
            message:"Pedido foi alterado com sucesso."
        });
    }).catch(function(erro){
        return res.status(400).json({
            error:true,
            message:"Erro na alteração do serviço."
        });
    });
});

//Exercícios aula 04
//Exercício 1 Busca cliente
app.get('/buscacliente', async (req, res) => {
    await pedido.findAll({
        where: {
            ClienteId: req.body.ClienteId
        }
    }).then((pedido) => {
        return res.json( {pedido} )
    }).catch((erro) => {
        return res.status(400).json({
            error: false,
            message: "Erro ao atualizar"
        })
    })
}); 

//Exercício 2 Consulta cliente
app.get('/consultaCliente/:id', async (req, res) => {
    await cliente.findByPk(req.params.id).then((cliente) => {
        return res.json({ cliente });
    });
});

//Exercício 2 Put Cliente
app.put('/editarcliente', (req, res) => {
    cliente.update(req.body, {
        where: {
            Id: req.body.id
        }
    }).then(() => {
        return res.json({
            error: false,
            message: "Cliente Atualizado"
        })
    }).catch((erro) => {
        return res.status(400).json({
            error: false,
            message: "Erro ao atualizar"
        })
    })
});

//Exercício 3 Put Pedido
app.put('/editarpedidoput', (req, res) => {
    pedido.update(req.body, {
        where: {
            Id: req.body.id
        }
    }).then(() => {
        return res.json({
            error: false,
            message: "Pedido Atualizado"
        })
    }).catch((erro) => {
        return res.status(400).json({
            error: false,
            message: "Erro ao atualizar"
        })
    })
});

app.get('/excluircliente', async(req,res)=>{
    cliente.destroy({
        where: {id:2}
    });
});

app.delete('/apagarcliente/:id', (req, res)=>{
    cliente.destroy({
        where: {id: req.params.id}
    }).then(function(){
        return res.json({
            error:false,
            message:"Cliente foi excluído com sucesso."
        });
    }).catch(function(erro){
        return res.status(400).json({
            error:true,
            message:"Não foi possível excluir o cliente."
        });
    });
});

app.delete('/apagarpedido/:id',(req,res)=>{
    pedido.destroy({
        where: {id:req.params.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Pedido excluído com sucesso."
        });
    }).catch(function(){
        return res.status(400).json({
            error: true,
            message: "Não foi possível excluir o pedido."
        });
    });
});

app.delete('/apagarservico/:id',(req,res)=>{
    servico.destroy({
        where: {id:req.params.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Serviço excluído com sucesso."
        });
    }).catch(function(){
        return res.status(400).json({
            error: true,
            message: "Não foi possível excluir o serviço."
        });
    });
});


let port=process.env.PORT || 3001;

app.listen(port,(req,res)=>{
    console.log('Servidor ativo');
});