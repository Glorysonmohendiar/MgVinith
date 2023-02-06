

const expection = require("./expection");

describe("registerUser", () =>{
    it('should throw if username is falsy', () =>{

        const args =[null, NaN, "", 0, false, undefined];
        args.forEach(a =>{

            expect(() => {expection.registerUser(a) }).toThrow();
        });
    });
        it('should return a user object if valid username is passed', () =>{
            const result = expection.registerUser("Gloryson");
            expect(result).toMatchObject({username: "Gloryson"});
    
        
    });
});