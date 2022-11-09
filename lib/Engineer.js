const Engineer = require('./Employee')


class Engineer extends Employee{
    constructor(position, name, id,github){
    super(position, name, id)
    this.github=github
    
    }
addGithubURL(){
   return  this.github
}
getRole(){
return `'Engineer'`

}
}
module.exports=Engineer