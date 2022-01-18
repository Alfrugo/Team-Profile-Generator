//testing the classes manually with console logs


const Employee = require('./Employee.js')
const Intern = require('./Intern.js');
const Manager = require('./Manager.js');
const Engineer = require('./Engineer')

const newPerson = new Employee('Alfredo', '2343', 'adiez@mtm-inc.net');
const newIntern = new Intern('Alfredo', '2343', 'adiez@mtm-inc.net','SLU');
const newManager = new Manager('Felipe','F1234','fleipe@hotmail.com','Lake Saint Louis');
const newEngineer = new Engineer('Santiago', 'S3455', 'sa@sio.com','Santigit')




newPerson.introduceSelf();
newIntern.introduceSelf();
newEngineer.introduceSelf();
newManager.inttroduceSelf();