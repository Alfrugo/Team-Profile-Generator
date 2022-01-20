// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Inport classes

const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

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
    }
  ])
}

inputManager()












// const questions = [
        
    
//         {
//             name: 'title',
//             type: 'input',
//             message: 'Please enter your project title: ', 
//             validate: titleInput => {
//                 if (titleInput) {
//                   return true;
//                 } else {
//                   console.log('Please enter title!');
//                   return false;
//                 }
//               }
//         },
//         {
//             name: 'description',
//             type: 'input',
//             message: 'Please enter description for your project: ',
//             validate: descriptionInput => {
//                 if (descriptionInput) {
//                   return true;
//                 } else {
//                   console.log('Please enter a description!');
//                   return false;
//                 }
//               }
//         },
//         {
//             name: 'installation',
//             type: 'input',
//             message: 'Include instructions for installation: ',
//             validate: installationInput => {
//                 if (installationInput) {
//                   return true;
//                 } else {
//                   console.log('Please enter the freaking instructions!');
//                   return false;
//                 }
//               }
//         },
//         {
//             name: 'usage',
//             type: 'input',
//             message: 'Please add usage information: ',
//             validate: usageInput => {
//                 if (usageInput) {
//                   return true;
//                 } else {
//                   console.log('Sorry, but we need usage info!');
//                   return false;
//                 }
//               }
//         },
//         {
//             name: 'contribution',
//             type: 'input',
//             message: 'Please enter the contribution guidelines: ',
//             validate: contributionInput => {
//                 if (contributionInput) {
//                   return true;
//                 } else {
//                   console.log('Please enter the contribution guidelines!');
//                   return false;
//                 }
//               }
//         },
//         {
//             name: 'test',
//             type: 'input',
//             message: 'Please enter testing instruction: ',
//             validate: testInput => {
//                 if (testInput) {
//                   return true;
//                 } else {
//                   console.log('Please enter the testing instruction!!');
//                   return false;
//                 }
//               }
//         },

//         {
//             name: 'license',
//             type: 'list',
//             message: 'What type of license does your project have: ',
//             choices: ['Community', 'MIT','Apache 2.0', 'Boost', 'BSD 3-Clause', 'Eclipse', 'GNU GPL', 'none']
//         },

//         {
//             name: 'githubUser',
//             type: 'input',
//             message: 'What is your Github username: ',
//             validate: userInput => {
//                 if (userInput) {
//                   return true;
//                 } else {
//                   console.log('Please enter your Github user!!');
//                   return false;
//                 }
//               }
//         },
//         {
//             name: 'email',
//             type: 'input',
//             message: 'Enter your email address: ',
//             validate: emailInput => {
//                 if (emailInput) {
//                   return true;
//                 } else {
//                   console.log('Please enter your email!!');
//                   return false;
//                 }
//               }
//         },

//       ]


// // TODO: Create a function to write README file

        
    


// // TODO: Create a function to initialize app
// function init() {
//     inquirer.prompt(questions).then(results => {
//       //console.log("here are the results without stringify: " + results);
//       //console.log ("here's results title: " + results.title) // testing that it works

//         const fileName = `./README-OUTPUT/${results.title.split(' ').join('').toLowerCase()}.md`
        
//         fs.writeFile(fileName, generateMarkdown (results), {}, error => {
//             if (error) {
//                 console.error(error);
//             } else { 
//                 console.log('Your Readme file has been created successfully. Please check the folder README-OUTPUT')
//             }
//         })
// })
// }

// // Function call to initialize app
// init();

// // questions();

