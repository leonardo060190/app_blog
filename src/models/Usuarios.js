const { Model, DataTypes } = require('sequelize')

class Usuarios extends Model {
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING(100),
            email: DataTypes.STRING(100),
            created_at: DataTypes.DATE,
            updated_at: DataTypes.DATE
        },{
           sequelize 
        })
    }
}

module.exports = Usuarios;
