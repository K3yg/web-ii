
const db =  require('./config/database.js');
const Music = require('./models/Music');
const User = require('./models/User');
const Artist = require('./models/Artist');
    
(async () => {
    try{
        console.log('Connecting database...');
        await db.sync({ force: true });
        console.log('Connected');
        await Music.findAll();
        await User.findAll();
        await Artist.findAll();

    }catch(err){
        console.log('Error connecting database');
        console.log(err);
    }
})();