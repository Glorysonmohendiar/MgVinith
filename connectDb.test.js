
const getData = require('../connectDb')


describe('validate user obj', () =>{
    it('this test should test the name of the user', async() =>{
        //test('shold have "MGVinith',()=>{
            let response = await getData()
            for(let i = 0; i < response.length; i++){
                let obj = response[i];
            expect(obj.name).toBe("MgVinith")
            expect(obj.mob).toBe(9973770930)
            
            }
        })
    })
//})

       


            