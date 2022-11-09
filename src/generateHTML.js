function generateHTML(data) {
    return `# ${data.position}
  
  
  managerName
  ${data.managerName}
  id
  ${data.ID}
  email
  [${data.email}](emailme@aol.com)
  officeNumber
  ${data.officeNumber}
  position
  ${data.position}
  engineerInternNam
  ${data.engineerInternNam}
  githubName
  [${data.Github}](https://github.com/${data.Github})
  school
  ${data.school}`;
  }





export default generateHTML