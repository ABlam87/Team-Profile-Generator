// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, username){
        super(name, id, email)
        this.username = username
    }

    getGithub = function() {
        return this.username
    }

    getRole = function () {
        return 'Engineer'
    }
}

module.exports = Engineer;