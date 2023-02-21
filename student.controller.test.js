const { ServerDescription } = require('mongodb');
const controller = require('../Node-Project/controller/student.controller');
const model = require('../Node-Project/model/student.model');

describe('Test the data', () =>{
    test("my user", () =>{
        expect(typeof controller.createStudents).toBe("function");
        
    })
})