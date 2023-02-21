const studentModel = require('../model/student.model');
exports.createStudents = async (req,res,next) =>{
    try{
        console.log("create student")
        const newStudents = await (studentModel.create(req.body))
        console.log(newStudents);
        res.status(201).json(newStudents);

    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}