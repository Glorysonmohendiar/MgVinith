
//mongodb+srv://students:<password>@cluster0.y9lafjc.mongodb.net/?retryWrites=true&w=majority

let controller = require('../controller/student.controller')
let router = require("express").Router();
router.get('/', (req, res)=>{
    res.json({
        status: "API is working",
        message: "Hi Welcome to myNewWebServer api router"
    })
})

router.post('/students', controller.createStudents);

module.exports = router;