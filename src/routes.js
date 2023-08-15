const express = require('express');
const UsuariosController = require('./controller/UsuariosController');
const PostsController = require('./controller/PostsController');

const routes = express.Router();

routes.get('/', (req, res) => {
res.send('Olá leonardo')
});

////////////////////////////////////////////////////////////////

// Rotas da tabela Usuario
routes.get('/usuarios', UsuariosController.index);
routes.get('/usuarios/:id', UsuariosController.buscaid);
routes.put('/usuarios/:id', UsuariosController.update);
routes.post('/usuarios', UsuariosController.store);
routes.delete('/usuarios/:id', UsuariosController.delete);

////////////////////////////////////////////////////////////////

//Rotas da tabela Posts
routes.get('/posts', PostsController.index);
routes.get('/posts/:id', PostsController.buscaid);
routes.post('/posts', PostsController.store);
routes.put('/posts/:id', PostsController.update);
routes.delete('/posts/:id', PostsController.delete);
module.exports = routes;// exporta as rotas para do aplicação

