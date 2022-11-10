//import Engineer from "../lib/engineer.js"
const Employee=require('../lib/Employee.js')


 it("has a role", ()=>{
    const testValue="boss";
    
    //act
    const employee=new Employee(testValue)

     //assert
    expect(employee.role).toBe(testValue)
    
})
it("has a github url", ()=>{
    const testValue="github";
     
    //act
    const employee=new Employee(testValue)

     //assert
    expect(employee.github).toBe(testValue)
    
})

