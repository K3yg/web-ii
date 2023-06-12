const DataTypes = require('sequelize').DataTypes;
const sequelize = require('../config/database.js');

const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
    },
    username: {
        type: DataTypes.STRING({ length: 50 }),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING({ length: 50 }),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING({ length: 50 }),
        allowNull: false
    },
    type: {
        type: DataTypes.STRING({ length: 50 }),
        allowNull: false
    }
}, {
    tableName: 'user',
    freezeTableName: true
}) 


module.exports = User;
