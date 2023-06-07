const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite', // Path to your SQLite database file
    dialectModule: require('sqlite3').verbose(), // Use the sqlite3 package as the SQLite dialect
});

module.exports = sequelize;