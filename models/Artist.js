const DataTypes = require('sequelize').DataTypes;
const sequelize = require('../config/database.js');

const Artist = sequelize.define('artist', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
    },
    name : {
        type: DataTypes.STRING({ length: 50 }),
        allowNull: false
    },
    stream_count: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    followers: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'artist',
    freezeTableName: true
}) 


module.exports = Artist;
