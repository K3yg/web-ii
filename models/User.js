const DataTypes = require('sequelize').DataTypes;
const sequelize = require('../config/database.js');

const bcrypt = require("bcryptjs");

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
        type: DataTypes.STRING({ length: 255 }),
        allowNull: false,
        set(password) {
            this.setDataValue("password", bcrypt.hashSync(password, 10));
        }
    },
    type: {
        type: DataTypes.STRING({ length: 50 }),
        allowNull: false
    }
}, {
    tableName: 'user',
    freezeTableName: true
}) 

User.prototype.validPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

module.exports = User;
