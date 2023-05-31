const Sequelize = require('sequelize');
const sequelize = require('../db.js');

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
    },
    name: {
        type: Sequelize.STRING({ length: 50 }),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING({ length: 60 }),
        unique: true
    },
    login: {
        type: Sequelize.STRING({ length: 60 }),
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING({ length: 255 }),
        allowNull: false
    }
}, {
    tableName: 'user',
    freezeTableName: true
}) 

