const Intern = require('./Employee')


class Intern extends Employee{
    constructor(position, name, id,school){
    super(position, name, id)
        this.school=school
}
addSchool(){
    return this.school
}
getRole(){
    return `'Intern'`
    
    }
}


module.exports=Intern;