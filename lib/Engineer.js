// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
import Employee from "./Employee";

class Engineer extends Employee {
    constructor(name, id, email, username){
        super(name, id, email)
        username = this.username
    }

    getGithub = function() {
        return this.username
    }

    getRole = function () {
        return 'Engineer'
    }
}

module.exports = Engineer;