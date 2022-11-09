// class Employee{
//  constructor(position,name,id,email){
// // The first class is an `Employee` parent class with the ////
// //following properties and methods:
// this.position=`${position}`;
// this.name = `${name}`;
// this.id `${id}`;
// this.email = `${email}`;
//  }

class Employee {
  currentEmployee = true;
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    console.log(this.name);
    return this.name;
  }
  getId() {
    console.log(this.id);
    return this.id;
  }
  getEmail() {
    console.log(this.email);
    return this.email;
  }
}

export default Employee;

// if(role="engineer"){
// getOfficeNumber()
// }

// if(role=="manager"){
// getGithubUrl()
// }

// if(role=="intern"{
// getSchool()
// })
