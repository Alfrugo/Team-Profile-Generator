class Employee {
    constructor(name, id, email, ) {
      this.name = name;
      this.email = email;
      this.id = id;
    }
    introduceSelf(){
        console.log(`Hi, my name is ${this.name}, my email is ${this.email} and my ID is ${this.id} `)
    }
  } 

const newPerson = new Employee('Alfredo', '2343', 'adiez@mtm-inc.net');

  newPerson.introduceSelf();


// Properties and methods
//name

// id

// email


// getName()

// getId()

// getEmail()

// getRole() // Returns 'Employee'