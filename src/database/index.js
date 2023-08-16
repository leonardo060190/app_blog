const Sequelize = require('sequelize'); // importa a biblioteca do sequelize

// Importa as configurações do banco de dados definidas no arquivo 'database.js' da pasta 'config'.
const dbConfig = require('../config/database');

// Importa os modelos (tabelas) que serão usados para interagir com o banco de dados.
const Usuarios = require('../models/Usuarios');// Modelo para a tabela de usuários.
const Posts = require('../models/Posts'); // Modelo para a tabela de posts.

// Cria uma nova conexão com o banco de dados utilizando as configurações definidas no 'dbConfig'.
const connection = new Sequelize(dbConfig);

// Inicializa os modelos, definindo suas estruturas e relações com o banco de dados.
Usuarios.init(connection);// Inicializa o modelo de usuários.
Posts.init(connection);// Inicializa o modelo de posts.


module.exports = connection;
