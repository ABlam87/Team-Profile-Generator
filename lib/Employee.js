// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        name = this.name,
        id = this.id,
        email = this.email
    }

    getName = function() {
        return this.name
    }

    getId = function() {
        return this.id
    }

    getEmail = function() {
        return this.email
    }

    getRole = function() {
        return 'Employee'
    }
}

module.exports = Employee