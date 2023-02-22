
const getData = require('../firstHuntos')
const { testEnvironment } = require('../jest.config')


describe('validate user obj',() =>{
    it('this test should test the details of the user', async() =>{});
    test('shold have contact 9973770930', async()=>{
        let response = await getData()
        for(let i = 0; i < response.length; i++){
            let obj = response[i];
        expect(obj.contact).toBe("9973770930");
        }
    });
});

       


            