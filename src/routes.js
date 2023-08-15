const express = require('express'); // Importa a biblioteca do express
const UsuariosController = require('./controller/UsuariosController'); // Importa o arquivo UsuariosController da pasta Controller
const PostsController = require('./controller/PostsController'); // importa o arquivo PostsController da pasta Controller

const routes = express.Router(); 

routes.get('/', (req, res) => {
res.send('Olá leonardo')
});

////////////////////////////////////////////////////////////////

// Rotas da tabela Usuario
routes.get('/usuarios', UsuariosController.index); // rota que retorna os dados da tabela Usuarios
routes.get('/usuarios/:id', UsuariosController.buscaid); // rota que retorna os dados tabela Usuarios pelo id informado
routes.put('/usuarios/:id', UsuariosController.update); //rota que altera os dados de um usuário pelo id
routes.post('/usuarios', UsuariosController.store); //rota que adiciona um novo usuário na tabela Usuarios
routes.delete('/usuarios/:id', UsuariosController.delete); //rota que deleta um usuário pelo id informado

////////////////////////////////////////////////////////////////

//Rotas da tabela Posts
routes.get('/posts', PostsController.index); // rota que retorna os dados da tabela Posts
routes.get('/posts/:id', PostsController.buscaid);// rota que retorna os dados tabela Posts pelo id informado
routes.post('/posts', PostsController.store); //rota que adiciona um novo post na tabela Posts
routes.put('/posts/:id', PostsController.update); //rota que altera os dados de um post pelo id 
routes.delete('/posts/:id', PostsController.delete); //rota que deleta um post pelo id informado

////////////////////////////////////////////////////////////////


module.exports = routes;// exporta as rotas para do aplicação

