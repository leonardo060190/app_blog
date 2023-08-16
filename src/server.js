const express = require('express');//importa a biblioteca express
const cookieParser = require('cookie-parser');// Importa a biblioteca para lidar com cookies.
const cors = require('cors');// Importa a biblioteca para lidar com políticas de mesma origem (CORS).
const bodyParser = require('body-parser');//faz a conversão de JSON para javascript
const app = express();// Cria uma instância do servidor utilizando o express

const routes = require('./routes.js');

// Importa o arquivo que configura a conexão com o banco de dados
require('./database')

// Configurações globais do aplicativo
app.use(cors());// Habilita a política de CORS para permitir comunicação entre diferentes domínios
app.use(cookieParser());
app.use(express.json());// Configurando o express para aceitar JSON
app.use(bodyParser.json());// Analisa o corpo das requisições em formato JSON
app.use(bodyParser.urlencoded({ extended: true })); // Analisa o corpo das requisições codificadas em URL

app.use('/', routes);// Associa as rotas definidas no arquivo 'routes.js' às rotas do aplicativo

app.listen(3001)// Inicia o servidor, ouvindo na porta 3001
