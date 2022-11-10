import fs from"fs";
import inquirer from "inquirer";
import generateHTML from "./src/generateHTML.js"



import Engineer from "./lib/Engineer.js"
import Intern from  "./lib/Intern.js"
import Manager from  "./lib/Manager.js"


const employeeData=[
  //     new Engineer("engineer",'brian',6666,'bajebi@mac.com'),
  //     new Intern(),
  //     new Manager(),
  //     new Engineer("engineer",'doug',2266,'doug@mac.com'),
  //     new Engineer("engineer",'steve',ou812,'wahwahi@mac.com')
  ];




  // if(role="engineer"){
// getOfficeNumber()
// }

// if(role=="manager"){
// getGithubUrl()
// }

// if(role=="intern"{
// getSchool()
// })
const team = []

const managerPrompt = () => {
  return inquirer.prompt([
{
  type: 'input',
  message: 'Enter the name of the team manager: ',
  name: 'managerName',
 
},
{
  type: "input",
  message: "Enter employee ID: ",
  name: "ID",
},
{
  type: "input",
  message: "Enter email address: ",
  name: "email",
},
{
  type: "input",
  message: "Enter the office number of the team manager",
  name: "officeNumber",
}]).then(managerData => {
  const {managerName, ID, email, officeNumber} = managerData;
  const manager = new Manager(managerName, ID, email, officeNumber);
  team.push(manager)
  console.log(manager)
})
};

const employeePrompt = () => {
  return inquirer.prompt([{
    type: "list",
    message: "Select your position",
    name: "positionSelection",
    choices: ["Engineer", "Intern", "Finish"],
  },
{
    type: 'input',
    message: 'Enter the name of this Employee: ',
    name: 'empName',
},
{
  
    type: "input",
    message: "Enter employee ID: ",
    name: "empID", 
},
{
  type: "input",
  message: "Enter email address: ",
  name: "email",
},
{
  type: "input",
  message: "Enter Engineer Github Username",
  name: "githubName",
  when: (input) => input.positionSelection === "Engineer"
},
{
  type: "input",
  message: "Enter the school you attend: ",
  name: "school",
  when:(input)=> input.positionSelection==="Intern"
},
{
  type: "confirm",
  name: "addAnother",
  message: "Would you like to add another employee",
  default: false
}]).then(employeeData => {
  let {empName, empID, email, githubName,school, addAnother} = employeeData
  let employee;
  if(positionSelection === "Engineer") {
    employee = new Engineer(empName, empID, email, githubName)
    console.log(employee)
  } else if(positionSelection === "Intern") {
    employee = new Intern(empName, empID, email, school)
    console.log(employee)
  }
  team.push(employee)
  if(addAnother) {
    return employeePrompt(team)
  } else {
    return team
  }
})
}

managerPrompt()
.then(employeePrompt)



const questions = [
 
  {
    type: "input",
    message: "Enter your name: ",
    name: "engineerInternName",
  },
  {
    type: "input",
    message: "Enter your Github Username",
    name: "githubName",
  },
  {
    type: "input",
    message: "Enter the school you attend: ",
    name: "school",
    when:(input)=> input.school==="Intern"
  },
]



// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, (err) => {
//       if (err) {
//         return console.log(err);
//       }
//       console.log("T");
//     });
//   }



function init() {}
 