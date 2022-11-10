const Employee=require('../lib/Employee.js')

//describe("Employee constructor", ()=>{
    test("returns an Employee object", ()=>{
        //arrainge
        //act
        const employee=new Employee()
        
         //assert
        expect(typeof(employee)).toBe("object")
     })

    it("has a name", ()=>{
        const name="Brian";
        
        const employee=new Employee(name)
 
         //assert
        expect(employee.name).toBe(name)
        
    })

    it("has an Id", ()=>{
       
        const testValue=6666
       
        const employee=new Employee('name',testValue)

        expect(employee.id).toBe(testValue)
    })

    it("has an email", ()=>{
        
        const testValue="bajebi@mac.com"
         
        const employee=new Employee("name", 6666,testValue)

        //assert
        expect(employee.email).toBe(testValue)
    })

    it("has a name getName()", ()=>{
        const testValue="Brian";
       
        const employee=new Employee(testValue)
 
        expect(employee.getName()).toBe(testValue)
        
    })

    it("has an Id getID()", ()=>{
       
        const testValue=6666
       
        const employee=new Employee('name',testValue)

        expect(employee.getId()).toBe(testValue)
    })

    it("has an email getEmail()", ()=>{
        
        const testValue="bajebi@mac.com"
        
        const employee=new Employee("name",6666,testValue)

        expect(employee.getEmail()).toBe(testValue)
    })
    






