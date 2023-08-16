const Sequelize = require('sequelize'); // importa a biblioteca do sequelize
const dbConfig = require('../config/database');

const Usuarios = require('../models/Usuarios');
const Posts = require('../models/Posts');

const connection = new Sequelize(dbConfig);

Usuarios.init(connection);
Posts.init(connection);


module.exports = connection;
