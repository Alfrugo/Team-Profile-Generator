// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Inport classes

const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

const createHtml = require('./lib/createHtml')

//  Create an array of questions for user input

const officeTeam = []

// Inquirer questions

// Manager

const inputManager = () => {
  return inquirer.prompt ([
    {
      type: 'input',
      name: 'name',
      message: 'Enter the name of the manager: ',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("A name for manager is required please enter manager's name: ");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: "Enter the manager ID: ",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Manager ID is required: ");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "Enter email: ",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Email is required: ");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'office',
      message: "Enter the manager office number: ",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("The office number is required: ");
          return false;
        }
      }
    }
  ])
  .then(managerData => {
    const { name, id, email, office } = managerData;
    const manager = new Manager (name, id, email, office);

    //add the input to the group array
    officeTeam.push(manager);

    //for testing 
    console.log('below is the officeTeam')
    console.log(officeTeam);
    console.log('below is manager')
    console.log(manager)

  })
};

const inputEmployee = () => {

  return inquirer.prompt ([  // Choose between Engineer or Intern
    {
        type: 'list',
        name: 'role',
        message: "Please choose your employee's role",
        choices: ['Intern', 'Engineer']
    },
    {
      type: 'input',
      name: 'name',
      message: 'Enter the name of the employee: ',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("A name for employee is required please enter manager's name: ");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: "Enter employee ID: ",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Manager ID is required: ");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "Enter email: ",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Email is required: ");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: "Please enter the employee's github username.",
      when: (input) => input.role === "Engineer",
      validate: nameInput => {
          if (nameInput ) {
              return true;
          } else {
              console.log ("Please enter the employee's github username!")
          }
      }
  },
  {
      type: 'input',
      name: 'school',
      message: "Please enter employee school",
      when: (input) => input.role === "Intern",
      validate: nameInput => {
          if (nameInput) {
              return true
          } else {
              console.log ("School is required: ")
          }
      }
  },
  {
      type: 'confirm',
      name: 'confirmAddEmployee',
      message: 'Do you want to add more employees ?',
      default: false
  }
  ])
  .then(employeeData => {
    // data for employee types 

    let { name, id, email, role, github, school, confirmAddEmployee } = employeeData; 
    let employee; 

    if (role === "Engineer") {
        employee = new Engineer (name, id, email, github);

        console.log(employee);

    } else if (role === "Intern") {
        employee = new Intern (name, id, email, school);

        console.log(employee);
    }

    officeTeam.push(employee); 

    if (confirmAddEmployee) {
        return inputEmployee(officeTeam); 
    } else {
        return officeTeam;
    }
})

}


// file write function

const writeFile = data => {
  fs.writeFile('./index.html', data, err => {
      if (err) {
          console.log(err); // error log. 
          return;
      } else {
          console.log("index.html has been created. thank you.") //success  
      }
  })
}; 


inputManager().then (inputEmployee).then(officeTeam => {
  return createHtml(officeTeam) // we call the object that creates the html

}) // .then write file 

.then(indexPage => {
  return writeFile(indexPage);
})
.catch(err => {
console.log(err);
});
