import Employee from "./Employee.js"

class Engineer extends Employee {
  constructor(name, id, email, role,github) {
    super(name, id, email);
    this.role=role;
    this.github = github;
    
  }
  getGithub() {
    return this.github
  }
  getRole() {
    return "Engineer"
  }
}
//export default Engineer;
module.exports=Engineer
