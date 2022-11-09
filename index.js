import fs from"fs";
import inquirer from "inquirer";
import generateHTML from "./src/generateHTML.js"



const Engineer =require('./Engineer')
const Intern =require('./Intern')
const Manager =require('./Manager')


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


const questions = [{
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
    message: "Eneter the office number of the team manager",
    name: "officeNumber",
  },
  {
    type: "list",
    message: "Select your position",
    name: "positionSelection",
    choices: ["Engineer", "Intern", "Finish"],
  
  },
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



function init() {
    inquirer.prompt(questions)
    .then((userInput) => {
      //console.log("generate file");
      writeToFile("index.html", '??generateHTML??'(userInput));
    });
  }
  
  init();





// const Employee =require('./Employee')
// const Intern =require('./Intern')
// const Manager =require('./Manager')
// const Engineer =require('./Engineer')
// const Workplace = require('./lib/Workplace')

// const employees=[
//     new Engineer("engineer",'brian',6666,'bajebi@mac.com'),
//     new Intern(),
//     new Manager(),
//     new Engineer("engineer",'doug',2266,'doug@mac.com'),
//     new Engineer("engineer",'steve',ou812,'wahwahi@mac.com')
// ]

// const Workplace=new Workplace('xxxx','bbbbb','rrrrr')

// Workplace.printCard()    //print card is method in ZOO