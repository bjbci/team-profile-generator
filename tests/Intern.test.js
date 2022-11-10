const Employee=require('../lib/Employee.js')

it("has a school", ()=>{
    const school="Brian";
    
    const employee=new Employee()

     //assert
    expect(employee.name).toBe(name)
    