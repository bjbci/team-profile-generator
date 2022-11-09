//const  employee=require('./Employee')
function Employee(role,name,id,email){
// The first class is an `Employee` parent class with the ////
//following properties and methods:
this.role
this.name = name;
this.id = id;
this.email = email;
// * `name`

// * `id`

// * `email`

// * `getName()`

// * `getId()`

// * `getEmail()`

// * `getRole()`&mdash;returns `'Employee'`

// The other three classes will extend `Employee`.
}

Employee.prototype.getName(){
    console.log(this.name)
    return  this.name
}
Employee.prototype.getId(){
    console.log(this.id)
    return  this.id
}
Employee.prototype.getEmail(){
    console.log(this.email)
    return  this.email
}
//module.exports=Employee;


//const  engineer=require('./Employee')
engineer(){
// The first class is an `Employee` parent class with the following properties and methods:

// * `name`

// * `id`

// * `email`

// * `getName()`

// * `getId()`

// * `getEmail()`

// * `getRole()`&mdash;returns `'Employee'`

// The other three classes will extend `Employee`.

// In addition to `Employee`'s properties and methods, `Engineer` will also have the following:

// * `github`&mdash;GitHub username

// * `getGithub()`

// * `getRole()`&mdash;overridden to return `'Engineer'`
}
//module.exports=engineer;



//const intern=require('./Employee')
intern (){
// The first class is an `Employee` parent class with the following properties and methods:

// * `name`

// * `id`

// * `email`

// * `getName()`

// * `getId()`

// * `getEmail()`

// * `getRole()`&mdash;returns `'Employee'`

// The other three classes will extend `Employee`.


// In addition to `Employee`'s properties and methods, `Intern` will also have the following:

// * `school`

// * `getSchool()`

// * `getRole()`&mdash;overridden to return `'Intern'`
}
//module.exports=intern;



//const manager=require('./Employee')
manager(){
// The first class is an `Employee` parent class with the following properties and methods:

// * `name`

// * `id`

// * `email`

// * `getName()`

// * `getId()`

// * `getEmail()`

// * `getRole()`&mdash;returns `'Employee'`

// The other three classes will extend `Employee`.


// In addition to `Employee`'s properties and methods, `Manager` will also have the following:

// * `officeNumber`

// * `getRole()`&mdash;overridden to return `'Manager'`
}
module.exports=manager;


///////////////////////////////////
//////////////////////////////////
class Employee {
    currentEmployee=true
constructor(role,name,id,email){
    this.role
    this.name = name;
    this.id = id;
    this.email = email;

}

printRole(){
    console.log(`Employee Positions: ${role}`)

}
printName(){
    console.log(`Employee Name: ${name}`)
}
printId(){
    console/log(`Employee Id: ${id}`)
}
printEmail(){
    console.log(`Employee Email: ${email}`)
}
)

}

const engineer= new Employee(role,name,id,email )


console.log(`Employee Positions: ${role}`)
console.log(`Employee Name: ${name}`)
console/log(`Employee Id: ${id}`)
console.log(`Employee Email: ${email}`)

const intern = new Employee(name,id,email)


console.log(`Employee Positions: ${role}`)
console.log(`Employee Name: ${name}`)
console/log(`Employee Id: ${id}`)
console.log(`Employee Email: ${email}`)

const manager = new Employee(name,id,email )


console.log(`Employee Positions: ${role}`)
console.log(`Employee Name: ${name}`)
console/log(`Employee Id: ${id}`)
console.log(`Employee Email: ${email}`)




module.exports=Employee




if(role="engineer"){
getOfficeNumber()
}

if(role=="manager"){
getGithubUrl()
}

if(role=="intern"{
getSchool()
})
















