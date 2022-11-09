const Manager = require('./Employee')


class Manager extends Employee{
constructor(position, name, id,officeNumber,position){
    super(position, name, id)
    this.officeNumber=officeNumber

}
addOffice(){
return this.officeNumber
}
getRole(){
return `'Manager'`

}
}
module.exports=Manager;