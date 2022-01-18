class Employee {
    constructor(name, id, email ) {
      this.name = name;
      this.email = email;
      this.id = id;
    }
    introduceSelf(){
        console.log(`Hi, my name is ${this.name}, my email is ${this.email} and my ID is ${this.id} `)
    }

    getName(){
        return `${this.name}`
    }

    getID(){
        return `${this.id}`
    }

    getEmail(){
        return `${this.email}`
    }

    getRole(){
        return `Employee`
    }
  } 

// added for testing purposes 
// const newPerson = new Employee('Alfredo', '2343', 'adiez@mtm-inc.net');
// newPerson.introduceSelf();
// console.log(newPerson.getName()+" get "+newPerson.getID() + " get " + newPerson.getEmail() + " get " + newPerson.getRole()) 


module.exports = Employee;

