const Employee = require('./Employee.cjs')

class Intern extends Employee {
  _school

  constructor (id, name, email, school) {
    super(id, name, email)
    this._school = school
    this._role = this.constructor.name
  }

  getSchool () {
    return this._school
  }

  renderToHtml () {
    return `
    <div class="card text-center" style="width: 18rem;">
    <div class="card-header">
    Employee
    </div>
    <div class="card-body">
        <h5 class="card-title">${this.getName()}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${this.getRole()}</h6>
        <p class="card-text">ID: ${this.getId()}</p>
        <p class="card-text">School: ${this.getSchool()}</p>
        <a href="mailto:${this.getEmail()}" class="card-link">Email: ${this.getEmail()}</a>
    </div>
    </div>
    `
  }
}
module.exports = Intern
