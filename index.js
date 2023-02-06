
const Joi = require("joi");
const express = require("express");
const app = express ();

app.use(express.json());

const courses = [
    {id: 1, name: "Gloryson"},
    {id: 2, name: "MgVinith"},
    {id: 3, name: "Tom"}
]

app.get('/', (req, res) =>{
    res.send("Hello World!!!");
});
app.get("/api/courses", (req, res) =>{
    res.send(courses);
});


app.post('/api/courses',(req, res)=>{
    const schema ={
        name: Joi.string().min(3).required()
    };

    const result = Joi.Validate(req.body, schema);

    if(result.error){
        res.status(404).send(result.error);
        return;
    }
    const course = {
        id: courses.length+1,
        name: req.body.name
    };
    courses.puah(course);
    res.send(course);
});


app.get("/api/courses/:id", (req, res) =>{
    const course = courses.find(c=> c.id === parseInt("kjhdkjvh"));

if(!course) res.stauts(404).send(result.error);
res.send(course);
})

const port = process.env.PORT || 3000;
app.listen(port,()=> console.log(`listening to port ${port}`));

