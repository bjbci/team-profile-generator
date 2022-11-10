const Employee=require('../lib/Employee.js')

test("returns an office number", ()=>{
    const testValue=6666
    //act
    const employee=new Employee(testValue)
    
     //assert
    expect(typeof(employee)).toBe(testValue)
 })

it("has a name", ()=>{
    const testValue="Brian";
    
    const employee=new Employee(testValue)

     //assert
    expect(employee.name).toBe(testValue)
    
})