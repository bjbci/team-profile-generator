import Employee from "./Employee.js"


class Intern extends Employee{
    constructor( name, id, email, school){
    super(position, name, id)
        this.school=school
}
addSchool(){
    return this.school
}
getRole(){
    return 'Intern'
    
    }
}


export default Intern;