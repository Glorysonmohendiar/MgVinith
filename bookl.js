const logger = require('./logger');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('Public'))

app.use(logger);

app.use(function log(req, res, next){
    console.log('Athentecting...');
    next();

})
    const genres =[
        {id: 1, name: 'Actio'},
        {id: 2, name: 'Comedy'},
        {id: 3, name: 'Horror'},
        {id: 4, name: 'Rommance'},
        {id: 5, name: 'Drama'}
    ]

    app.get ('/api/lofBooks', (req, res) => {
        res.send (genres);
    });

    app.listen(3000, console.log('App is listening to port 3000....'));
