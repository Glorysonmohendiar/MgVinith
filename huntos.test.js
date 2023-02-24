
const getData = require('../huntos')
const axios = require("axios");

describe("object ave the value", () =>{
    test("The object should have the correct value", async () =>{

        let response = await getData();
        for(let i = 0; i < response.length; i++){
            let obj = response[i];

            expect(obj.regStage).toBe(2);
            expect(obj.isActive).toBe(true);
            expect(obj.labor).toHaveLength(0);
            expect(obj.isActive).toBe(true);
            expect(obj.employer).toHaveLength(0);
            expect(obj.jtlL).toHaveLength(0);
            expect(obj.jtlE).toHaveLength(0);
            expect(obj.dWageEmployerR).toHaveLength(0);
           
        }
    })
})


describe('basicInfo should have the value', () =>{
        test('The basicInfo obj should  have correct values',async()=>{

            let response = await getData()
            for(let i = 0; i < response.length; i++){
                let obj = response[i];

            expect(obj.basicInfo.name).toBe("Gloryson Mohendiar");
            expect(obj.basicInfo.gender).toBe(1);
            expect(obj.basicInfo.birthyear).toBe(1998);
            expect(obj.basicInfo.primaryOccupation).toBe("Software Testing");
             }
        });
    });


describe('location should have the value', () =>{
        test('The location obj should  have correct values',async()=>{
        
            let response = await getData()
            for(let i = 0; i < response.length; i++){
                let obj = response[i];
        
            expect(obj.location.district).toBe("Eastsinghbhum");
            expect(obj.location.pin).toBe("832302");
            expect(obj.location.tehsil).toBe("Pitajuri");
            expect(obj.location.village).toBe("Pitajuri");
            
                  
            }
        });
});

/*describe('validate user obj',() =>{
    test("the name should toBe Gloryson Mohendiar", async() =>{
    axios.get.mockResolvedValue({
            basicInfo:[
                {
                    name: "Gloryson Mohendiar",
                    gender: 1,
                    birthyear: 1998
                }
            ],
        });
          
    });

        const name =  getStudentData();
        expect(name).toBe("Gloryson Mohendiar");

});*/
       


            