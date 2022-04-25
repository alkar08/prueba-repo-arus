
const { sequelize, Sequelize } = require(".")

module.exports = (sequelize, Sequelize) => {
    const alejandroCorrea = sequelize.define('alejandroCorrea', { //alejandrocorrea es el nombre que llevará la tabla
        std_id: {
            type: Sequelize.INTEGER, 
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            comment: 'Esta es la clave primaria de la tabla'
        },
        std_nombre: {
            type: Sequelize.STRING(100), // se le puede asignar el tamaño al campo
            allowNull: false
        },
        std_edad: {
            type: Sequelize.INTEGER,
            allowNull: false
        }, 
        std_sexo: {
            type: Sequelize.STRING(1),
            allowNull: false
        }
    },
    {
        freezeTableName: true,
        createdAt: 'std_created',
        updatedAt: 'std_updated'
    });

    return alejandroCorrea;
};






