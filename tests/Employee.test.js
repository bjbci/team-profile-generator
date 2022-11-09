const Employee=require('../lib/Employee.js')

describe("Employee constructor", ()=>{
    it("returns an Employee object", ()=>{
        //arrainge
        const name="Brian"
        const id=6666
        const email="bajebi@mac.com"
        //act
        const employee=new Employee(name,id,email)
        console.log(employee)

        //assert
        expect(employee instanceof Employee).toBe(true)

    })

    it("has a name", ()=>{
        const name="Brian"
        const id=6666
        const email="bajebi@mac.com" 
            //act
        const employee=new Employee(name,id,email)
 
         //assert
        expect(employee.name).toBe(name)
        
    })

    it("has an Id", ()=>{
        const name="Brian"
        const id=6666
        const email="bajebi@mac.com"
         //act
         const employee=new Employee(name,id,email)

        //assert
        expect(employee.id).toBe(true)
    })

    it("has an email", ()=>{
        const name="Brian"
        const id=6666
        const email="bajebi@mac.com"
         //act
        const employee=new Employee(name,id,email)

        //assert
        expect(employee.email).toBe(true)
    })




})

// The first class is an `Employee` parent class with the following properties and methods:

// * `name`

// * `id`

// * `email`

// * `getName()`

// * `getId()`

// * `getEmail()`

// * `getRole()`&mdash;returns `'Employee'`

// The other three classes will extend `Employee`.

