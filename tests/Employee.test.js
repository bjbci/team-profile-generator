const Employee=require('../lib/Employee.js')

//describe("Employee constructor", ()=>{
    it("returns an Employee object", ()=>{
        //arrainge
        //const name="Brian"
        //const id=6666
        //const email="bajebi@mac.com"
        //act
        const employee=new Employee()
        console.log(employee)

        //assert
        expect(typeof(employee)).toBe("object")
     })

    it("has a name", ()=>{
        const name="Brian";
        //const id=6666
        //const email="bajebi@mac.com" 
        //act
        const employee=new Employee(name)
 
         //assert
        expect(employee.name).toBe(name)
        
    })

    it("has an Id", ()=>{
        //const name="Brian"
        const test=6666
       // const email="bajebi@mac.com"
         //act
        const employee=new Employee('name',test)

        //assert
        expect(employee.id).toBe(test)
    })

    it("has an email", ()=>{
        //const name="Brian"
        //const id=6666
        const test="bajebi@mac.com"
         //act
        const employee=new Employee(test)

        //assert
        expect(employee.email).toBe(test)
    })

    it("has a name getName()", ()=>{
        const name="Brian";
        //const id=6666
        //const email="bajebi@mac.com" 
        //act
        const employee=new Employee(name)
 
         //assert
        expect(employee.getName()).toBe(name)
        
    })

    it("has an Id getID()", ()=>{
        //const name="Brian"
        const test=6666
       // const email="bajebi@mac.com"
         //act
        const employee=new Employee('name',test)

        //assert
        expect(employee.getId()).toBe(test)
    })

    it("has an email getEmail()", ()=>{
        //const name="Brian"
        //const id=6666
        const test="bajebi@mac.com"
         //act
        const employee=new Employee(test)

        //assert
        expect(employee.getEmail()).toBe(test)
    })







