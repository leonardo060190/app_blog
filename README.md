# app_blogs

Documentação da API de Blog

Introdução
Esta API permite a gestão de usuários e posts para um sistema de blog simples.

Base URL

https://api-exemplo-blog.com/v1

ou

http://localhost:3306/

  Endpoints

Usuários

  Criar um usuário
  
URL: /usuarios

Método: POST

Body:
{
    "nome": "João Silva",
    "email": "joao@example.com"
}

Resposta de Sucesso:

{

"success": true,
"message": "Usuário cadastrado com sucesso"

}

Se o Usuário já estiver cadastrado:

Resposta

{
	"success":  false,
 
	"message":  "E-mail já está cadastrado."
}


Listar todos os usuários

URL: /usuarios

Método: GET

Resposta de Sucesso:

[

{

	"id": 3,
	"nome": "João Silva",
	"email": "joao@example.com",
	"created_at": "2023-08-14T21:33:08.000Z",
	"updated_at": "2023-08-14T21:33:08.000Z"

},

{

	"id": 1,
	"nome": "leonardo",
	"email": "leonardo@domingos",
	"created_at": "2023-08-14T21:04:54.000Z",
	"updated_at": "2023-08-14T21:15:31.000Z"

}
	...
]


Obter um usuário pelo ID

URL: /usuarios/:id

Método: GET

Resposta de Sucesso:

{

	"success": true,
	"Usuarios": {
	"id": 1,
	"nome": "leonardo",
	"email": "leonardo@domingos",
	"created_at": "2023-08-14T21:04:54.000Z",
	"updated_at": "2023-08-14T21:15:31.000Z"

}

}


Altera um usuário pelo ID

URL: /usuarios/:id

Método: PUT

Resposta de Sucesso:

{

   {
   "success": true,
   "message": "Cadastro atualizado com sucesso"
   }

}


Deleta um usuário pelo ID

URL: /usuarios/:id

Método: DELETE

Resposta de Sucesso:

{

   {
   "success": true,
   "message": " Usuário deletado com sucesso"
   }

}


Posts

  Criar um post

URL: /posts

Método: POST

Body:
{
    "titulo": "Primeiro Post",
    "conteudo": "Este é o conteúdo do primeiro post.",
    "autor_id": 1
}


Resposta de Sucesso:
{
    {

"success":  true,
"message":  "Post cadastrado com sucesso"

}
}


Listar todos os posts

URL: /posts

Método: GET

Resposta de Sucesso:

[
    {
        "id": 1,
        "titulo": "Primeiro Post",
        "conteudo": "Este é o conteúdo do primeiro post.",
        "autor_id": 1,
        "data_publicacao": "2023-08-01T11:00:00Z",
        "data_atualizacao": "2023-08-01T11:00:00Z"
    },
    ...
]


Obter um post pelo ID
URL: /posts/:id

Método: GET

Resposta de Sucesso:

{
    "id": 1,
    "titulo": "Primeiro Post",
    "conteudo": "Este é o conteúdo do primeiro post.",
    "autor_id": 1,
    "data_publicacao": "2023-08-01T11:00:00Z",
    "data_atualizacao": "2023-08-01T11:00:00Z"
}


Altera um usuário pelo ID

URL: /usuarios/:id

Método: PUT

Resposta de Sucesso:

{

{
	"success":  true,
	"message":  "Post atualizado com sucesso"
}

}


Deleta um usuário pelo ID

URL: /usuarios/:id

Método: DELETE

Resposta de Sucesso:

{

   {
   "success": true,
   "message": " Post deletado com sucesso"
   }

}


Esse é um exemplo simplificado de documentação de API. Em ambientes de produção, ferramentas como Swagger ou Postman podem ser utilizadas para criar e gerenciar documentações mais robustas, interativas e detalhadas.
