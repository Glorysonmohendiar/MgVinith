
const getStudentData = require('./connectMyDb')


describe('validate user obj', () =>{
    it('this test should test the name of the user', async() =>{
        //test('shold have "MGVinith',()=>{
            let response = await getStudentData()
            for(let i = 0; i < response.length; i++){
                let obj = response[i];
            expect(obj.name).toBe("Mukesh")
            expect(obj.address).toBe("highway 15")
            
            }
        })
    })
//})

       


            