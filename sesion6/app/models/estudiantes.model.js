const { sequelize, Sequelize } = require(".")

module.exports = (sequelize, Sequelize) => {
    const alejandrocorrea = sequelize.define('alejandrocorrea', { //alejandrocorrea es el nombre que llevará la tabla
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
    },
    {
        freezeTableName: true,
        createdAt: 'std_created',
        updatedAt: 'std_updated'
    });

    return alejandrocorrea;
};

// module.exports = (sequelize, DataTypes) => {
//     const estudiantes = sequelize.define('estudiantes', {
//         std_id: DataTypes.NUMERIC,
//         std_nombre: DataTypes.STRING,
//         std_edad: DataTypes.NUMERIC,
//     });

//     return estudiantes;
// };




