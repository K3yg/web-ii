const Sequelize = require('sequelize');
const sequelize = require('../db.js');

const Singer = sequelize.define('singer', {
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
    nacionality: {
        type: Sequelize.STRING({ length: 60 }),
        unique: true
    },
    streams : {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
}, {
    tableName: 'singer',
    freezeTableName: true
}) 