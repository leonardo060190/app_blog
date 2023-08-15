const { Model, DataTypes } = require('sequelize')

class Posts extends Model {
    static init(sequelize){
        super.init({
            titulo: DataTypes.STRING(150),
            conteudo: DataTypes.TEXT,
            status: DataTypes.STRING(50),
            id_usuario: DataTypes.INTEGER,
            created_at: DataTypes.DATE,
            updated_at: DataTypes.DATE
        },{
           sequelize 
        })
    }
}

module.exports = Posts;
