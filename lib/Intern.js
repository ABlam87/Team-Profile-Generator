// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
import Employee from "./Employee";

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email)
        school = this.school
    }

    getSchool = function() {
        return this.school
    }

    getRole = function() {
        return 'Intern'
    }
}

module.exports = Intern;