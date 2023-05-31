const Sequelize = require('sequelize');
const sequelize = require('../db.js');

const Music = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
    },
    title: {
        type: Sequelize.STRING({ length: 50 }),
        allowNull: false
    },
    genre: {
        type: Sequelize.STRING({ length: 50 }),
        allowNull: false
    },
    duration: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    play_count: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    release_date: {
        type: Sequelize.DATE,
        allowNull: false
    },    
}, {
    tableName: 'music',
    freezeTableName: true
}) 