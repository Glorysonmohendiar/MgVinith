//import express
let express  = require("express");

//initialize the app

let app = express();
let port = 8080;
let apiRoutes = require('./routse/api-routes')

//Middleware

//This helps the express middleware to handle the json body request end point.
app.use(express.json());

app.use('/api',apiRoutes)

app.get('/', (req, res)=>{
    res.status(200).json("Hello this is my fisrt web server");
})

app.listen(port, ()=>{
    console.log("Running app on port ", port);
})
