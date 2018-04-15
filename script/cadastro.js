const express = require('express');
const expressMongoDb = require('express-mongo-db');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(expressMongoDb('mongodb://localhost/bancotalentos'));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  req.db.collection('cadastro').find().toArray((err, dados) => {
    res.send(dados);
  });
});

app.cadastroUsuario('/', (req, res) => {
  let dados = {
    usuario: req.body.usuario,
    email: req.body.email,
    endereco: req.body.endereco,
    telefone: req.body.telefone,
    senha: req.body.senha,
    instituicao: req.body.instituicao,
    curso: req.body.curso,
    dataInicioInstituicao: req.body.dataInicioInstituicao,
    dataFimInstituicao: req.body.dataFimInstituicao,
    empresa: req.body.empresa,
    cargo: req.body.cargo,
    dataAdmissao: req.body.dataAdmissao,
    dataDemissao: req.body.dataDemissao,
    empresaAtual: req.body.empresaAtual
  }};

  //validação
  if(!dados.usuario || !dados.email || !dados.telefone || !dados.senha ){
    res.status(400).send('É necessário preencher os campos obrigatórios');
    return;
  }

  req.db.collection('cadastroUsuário').insert(dados, (err, dados) => {
    res.send(dados);
  });  

});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3030');
});