import Employee from "./Employee.js"

class Manager extends Employee{
constructor(name, id,email, officeNumber){
    super(name, id, email)
    this.officeNumber=officeNumber
}
getOffice(){
return this.officeNumber
}
getRole(){
return 'Manager'
}
}
//export default Manager;
module.exports=Manager