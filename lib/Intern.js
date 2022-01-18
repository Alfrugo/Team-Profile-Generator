const Employee = require ('./Employee');

class Intern extends Employee{
    constructor(name, id, email, school){
        super (name, id, email);
        this.school = school;
    }
    getRole(){
        return `Intern`
    }

    getSchool(){
        return `${this.school}`
    }

    introduceSelf (){
        console.log (`Employee ${this.name} with ID: ${this.id} and email: ${this.email} goes to the school of: ${this.school}`)
    }
}


// const newIntern = new Inter('Alfrugo', '2343', 'adiez@mtm-inc.net','SLU');
// newIntern.introduceSelf();



module.exports = Intern;

