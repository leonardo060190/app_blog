const Posts = require('../models/Posts')//Importa o arquivo livros da pasta Models
const sequelize = require('sequelize');// Importa a biblioteca do Sequelize

module.exports = {

    ////////////////////////////////////////////////////////////////////////////////////////////////
    //Rota para retonar todos os Posts
     ////////////////////////////////////////////////////////////////////////////////////////////////
    //Rota para retonar todos os Posts
    async index(req, res) {
        await Posts.sequelize.query(`SELECT * FROM posts ORDER BY created_at`)
            .then(([results, metadata]) => {
                res.json(results);
            }).catch((error) => {
                res.status(500).json({
                    success: false,
                    message: error.message,
                });
            });
    },
    ////////////////////////////////////////////////////////////////////////////////////////////////
   // busca os Post referente ao id informado
   async buscaid(req, res) {
    await Posts.sequelize.query(`SELECT * FROM posts WHERE id = ?`,
        { replacements: [req.params.id] })
        .then(([results, metadata]) => {
            if (results.length === 0) {
                res.status(404).json({
                    success: false,
                    message: "Post não encontrada",
                });
            } else {
                res.json({
                    success: true,
                    Posts: results[0],
                });
            }
        }).catch((error) => {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        });
},
////////////////////////////////////////////////////////////////////////////////////////////////

// Autera os dados referente ao id informado
async update(req, res) {
    await Posts.sequelize.query(
        `UPDATE posts SET 
            titulo = ?,
            conteudo = ?,
            status = ?,
            id_usuario = ?,
            updated_at = ? 
        WHERE 
            id = ?`,
        {
            replacements: [
                req.body.titulo,
                req.body.conteudo,
                req.body.status,
                req.body.id_usuario,
                new Date(),
                req.params.id
            ]
        }
    )
        .then(([results, metadata]) => {
            if (metadata.affectedRows === 0) {
                res.status(404).json({
                    success: false,
                    message: "Post não encontrado",
                });
            } else {
                res.json({
                    success: true,
                    message: "Post atualizado com sucesso",
                });
            }
        }).catch((error) => {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        });

},
////////////////////////////////////////////////////////////////////////////////////////////////
//insere um novo post na tabela
async store(req, res) {
    await Posts.sequelize.query(
        `INSERT INTO posts (
            titulo,
            conteudo,
            status,
            id_usuario,
            created_at,
            updated_at
            )
        VALUES (?, ?, ?, ?, ?, ?)`,
        {
            replacements:
                [
                    req.body.titulo,
                    req.body.conteudo,
                    req.body.status,
                    req.body.id_usuario,
                    new Date(),
                    new Date()
                ]

        }
    )
        .then(([results, metadata]) => {
            res.status(201).json({
                success: true,
                message: "Post cadastrado com sucesso",
            });
        }).catch((error) => {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        });
},
////////////////////////////////////////////////////////////////////////////////////////////////
// deleta o post referente ao id informado
async delete(req, res) {
    await Posts.sequelize.query(`DELETE FROM posts WHERE id = ?`,
        { replacements: [req.params.id] })
        .then(([results, metadata]) => {
            if (metadata.affectedRows === 0) {
                res.status(404).json({
                    success: false,
                    message: "Post não encontrado",
                });
            } else {
                res.json({
                    success: true,
                    message: "Post deletado com sucesso",
                });
            }
        }).catch((error) => {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        })
}


    
};//fim do export
