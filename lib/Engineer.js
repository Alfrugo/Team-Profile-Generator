const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (name, id, email, github){
        super(name, id, email);
        
        this.github = github;
    }

    getGihub() {
        return `${this.github}`
    }

    getRole() {
        return 'Engineer'
    }
//this is for testing purposes//
    introduceSelf() {
       console.log(`Employee ${this.name} is an Engineer with Github username ${this.github}`);   //if i don't use this it shows as deprecated
    }
}

module.exports = Engineer;
