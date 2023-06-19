
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

const Music = sequelize.define('music', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
    },
    title: {
        type: DataTypes.STRING({ length: 50 }),
        allowNull: false
    },
    genre: {
        type: DataTypes.STRING({ length: 50 }),
        allowNull: false
    },
    duration: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    play_count: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    release_date: {
        type: DataTypes.DATE,
        allowNull: false
    },    
}, {
    tableName: 'music',
    freezeTableName: true
}) 


module.exports = Music;
