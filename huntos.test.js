
const getData = require('../huntos')


describe('validate user obj', () =>{
    it('this test should test the name of the user', async() =>{
        //test('shold have "MGVinith',()=>{
            let response = await getData()
            for(let i = 0; i < response.length; i++){
                let obj = response[i];
            expect(obj.contact).toBe("9973770930")
            expect(obj.language).toBe(4)
            
            
            }
        })
    })
//})

       


            