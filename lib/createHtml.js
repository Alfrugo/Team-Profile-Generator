//adding employee type modules
// Manager section
const addManger = function (manager) {
    return `
    <div class="col-3 mt-4">
        <div class="card h-150">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h4>Office Manager</h4>
            </div>
        </div>
    </div>
    `;
}

// Intern section
const generateIntern = function (intern) {
    return `
    <div class="col-3 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${intern.name}</h3>
                <h4>Office Intern</h4>
            </div>
    </div>
</div>
    `
}

// Engineer section
const generateEngineer = function (engineer) {
    return `
    <div class="col-3 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${engineer.name}</h3>
                <h4>Office Engineer</h4>
            </div>
        </div>
    </div>
    `
}



// push array to htmlBuilder 
htmlBuilder = (data) => {

    // array for cards 
    cardList = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); // pulling from lib employee. 


        // call manager function
        if (role === 'Manager') {
            const managerCard = addManger(employee)
            cardList.push(managerCard)
        }

        // call engineer function
        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee)
            cardList.push(engineerCard)
        }

        // call intern function 
        if (role === 'Intern') {
            const internCard = generateIntern(employee)
            cardList.push(internCard)
        }
        
    }

    // concatenating strings
    const employeeCards = cardList.join('')
    const generateTeam = generateTeamPage(employeeCards); //builds the teams from createHtml.js
    return generateTeam;

}

// generate html page 
const generateTeamPage = function (employeeCards) {   
  return`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>// Team Profile Generator //</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <header>
          <nav class="navbar" id="navbar">
              <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">// Team Profile Generator //</span>
          </nav>
      </header>
      <section>
          <div class="container">
              <div class="row justify-content-center" id="team-cards">
                  ${employeeCards}
              </div>
          </div>
      </section>
      
  </body>
  </html>
`;
}

module.exports = htmlBuilder; 