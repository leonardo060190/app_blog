const Sequelize = require('sequelize'); //importa a biblioteca do sequelize
const dbConfig = require('../config/database'); //importa o database da pasta config

const Usuarios = require('../models/Usuarios'); // importa o model da Usuarios
const Posts = require('../models/Posts'); // importa o model da Posts

const connection = new Sequelize(dbConfig); // faz uma nova conexão com o banco

Usuarios.init(connection); 
Posts.init(connection);


module.exports = connection;
