// significado do controller:
//Controller É a camada de controle, 
//responsável por ligar o model e a view, 
//fazendo com que os models possam ser 
//repassados para as views e vice-versa.

const Usuarios = require('../models/Usuarios')//Importa o arquivo Usuários da pasta Models
const sequelize = require('sequelize');// Importa a biblioteca do Sequelize

module.exports = {

    ////////////////////////////////////////////////////////////////////////////////////////////////

    //Metodo para retonar todos os Usuários
    async index(req, res) {
        await Usuarios.sequelize.query(`SELECT * FROM usuarios ORDER BY nome `)
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

    // Metodo busca o Usuário referente ao id informado
    async buscaid(req, res) {
        await Usuarios.sequelize.query(`SELECT * FROM usuarios WHERE id = ?`,
            { replacements: [req.params.id] })
            .then(([results, metadata]) => {
                if (results.length === 0) {
                    res.status(404).json({
                        success: false,
                        message: "Usuário não encontrado",
                    });
                } else {
                    res.json({
                        success: true,
                        Usuarios: results[0],
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

    // Metodo autera os dados que for refente os id informado
    async update(req, res) {
        await Usuarios.sequelize.query(
            `UPDATE usuarios SET 
            nome = ?,
            email = ?,
            updated_at = ? 
        WHERE 
            id = ?`,
            {
                replacements: [
                    req.body.nome,
                    req.body.email,
                    new Date(),
                    req.params.id
                ]
            }
        )
            .then(([results, metadata]) => {
                if (metadata.affectedRows === 0) {
                    res.status(404).json({
                        success: false,
                        message: "Usuário não encontrado",
                    });
                } else {
                    res.json({
                        success: true,
                        message: "Cadastro atualizado com sucesso",
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

    // Metodo insere um novo Usuário na tabela
    async store(req, res) {
        // Verifique se o e-mail já está cadastrado
        const usuarioExistente = await Usuarios.findOne({
            where: { email: req.body.email }
        });

        if (usuarioExistente) {
            return res.status(400).json({
                success: false,
                message: "E-mail já está cadastrado."
            });
        }
        await Usuarios.sequelize.query(
            `INSERT INTO usuarios (
            nome,
            email,
            created_at,
            updated_at
            )
        VALUES (?, ?, ?, ?)`,
            {
                replacements:
                    [
                        req.body.nome,
                        req.body.email,
                        new Date(),
                        new Date()
                    ]

            }
        )
            .then(([results, metadata]) => {
                res.status(201).json({
                    success: true,
                    message: "Usuário cadastrado com sucesso",
                });
            }).catch((error) => {
                res.status(500).json({
                    success: false,
                    message: error.message,
                });
            });
    },
    ////////////////////////////////////////////////////////////////////////////////////////////////

    // Metodo deleta o Usuário referente ao id informado
    async delete(req, res) {
        await Usuarios.sequelize.query(`DELETE FROM usuarios WHERE id = ?`,
            { replacements: [req.params.id] })
            .then(([results, metadata]) => {
                if (metadata.affectedRows === 0) {
                    res.status(404).json({
                        success: false,
                        message: "Usuàrio não encontrado",
                    });
                } else {
                    res.json({
                        success: true,
                        message: "Usuário deletado com sucesso",
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