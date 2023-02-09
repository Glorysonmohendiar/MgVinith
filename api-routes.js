

let router = require("express").Router();
router.get('/', (req, res)=>{
    res.json({
        status: "API is working",
        message: "Hi Welcome to myNewWebServer api router"
    })
})

module.exports = router;