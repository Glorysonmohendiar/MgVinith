const config = require('config');
const morgan = require('morgan');
const helmet = require('helmet');
const vinith = require('./vinith');
const express = require('express');
const app = express();

app.use(express.json());
//urlencoded() is a built-in middleware function
//its parses incoming request with urlencoded playloads and is based on body-parser.
//This method returns the middleware that parses all the urlencoded bodies.
app.use(express.urlencoded({extended:true}));  
app.use(express.static('public'));
app.use(vinith);
app.use(helmet());

// Configration
console.log('Application Name:' + config.get('name'));
console.log('Mail Server:' + config.get('mail.host'));
console.log('Mail password:' + config.get('mail.password'));
if(app.get('env') === 'development'){
    app.use(morgan('tiny'));
    console.log('morgan enabled....');
}

app.use(function log(req, res, next){
    console.log('Athentacting...');
    next();
});

    const genres=[
        {id:1, name:'Avengers'},
        {id:2, name:'Ironman'},
    ]

    app.get('/api/lomovies',(req, res)=>{
    res.send(genres);
    });

    app.listen(3000, console.log('App i listenning to port 3000...'));