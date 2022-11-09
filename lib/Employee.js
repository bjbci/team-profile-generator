const  employee=require('./Employee')

 constructor(position,name,id,email){
// The first class is an `Employee` parent class with the ////
//following properties and methods:
this.position=`${position}`;
this.name = `${name}`;
this.id `${id}`;
this.email = `${email}`;


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
















