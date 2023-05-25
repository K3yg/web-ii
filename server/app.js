
const sequelize = require('../database/config.js')
const express = require('express')
const app = express()



const db = require('../database/config.js');
    
    (async () => {
        try{
            console.log('Banco de dados conectando...');
            await db.sync({ force: false });
            console.log('Banco de dados conectado');
        }catch(err){
            console.log('Banco de dados não conectado');
            console.log(err);
        }
    })();

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(3000)
console.log('Server running at http://localhost:3000/')