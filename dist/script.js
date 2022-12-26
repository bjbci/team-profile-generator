let employeeID=$('employeeID')
console.log(employeeID)

let employeeName=$('#employeeName')
console.log(employeeName)

let employeeRole= $('#employeeRole')
console.log(employeeRole)

let employeeEmail=$('#employeeEmail')
console.log(employeeEmail)

let employeeGithub=$('#employeeGithub')
console.log(employeeGithub)

let employeeSchool=$('#employeeSchool')
console.log(employeeSchool)
    
let employeeOfficeNumber=$('employeeOfficeNumber')
console.log(employeeOfficeNumber)

let card=$('.card-body')
console.log(card)


// let employeeName=document.getElementById('employeeName')
// console.log(employeeName)

employeeName.text("bob")
employeeSchool.text("UWSP")
employeeOfficeNumber.text("955")

////  get data from nodejs

let name=$('employeeName').val()
let role=$('employeeRole').val()
let id=$('employeeID').val()
let email=$('employeeEmail').val()
let github=$('employeeGithub').val()
let office=$('employeeOfficeNumber').val()
let school=$('employeeSchool')

// console.log(name, role, id, email, github, school, office)

function renderCardData(name, role, id, email, github, school, office){
    console.log(name, role, id, email, github, school, office)


    ////   show data on cards
    
    //create NAME row
    //create a cell for each piece of data
    //append datainto card
    
    //create ROLE row
    //create a cell for each piece of data
    //append datainto card
    
    
    //create id row
    //create a cell for each piece of data
    //append datainto card
    
    
    //create EMAIL row
    //create a cell for each piece of data
    //append datainto card
    
    //create GITHUB row
    //create a cell for each piece of data
    //append datainto card
    
    
       //create SCHOOL row
       //create a cell for each piece of data
       //append datainto card
       
       
       //create OFFICE NUMBER row
       //create a cell for each piece of data
       //append data into card
       
       let tr=$('<tr>')  // an element created
       $('<td>').text(name).appendTo(tr)  //  an element created and text inserted AND appended to parent element
       $('<td>').text(role).appendTo(tr)
       $('<td>').text(id).appendTo(tr)
       $('<td>').text(email).appendTo(tr)
       $('<td>').text(github).appendTo(tr)
       $('<td>').text(school).appendTo(tr)

       console.log(tr)

       card.append(tr)  // appending tr TO CARD
       
       //append data into cards


    }

    renderCardData(name, role, id, email, github, school, office)