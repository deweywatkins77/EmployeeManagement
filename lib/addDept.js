const inquirer = require('inquirer')
const query = require('./querys.js')

let insertQuery = ''

var addDeptQuestions =[
    {
        type: 'input',
        name: 'deptName',
        message: 'What is the departments name?'
    }
]

async function addDept(){
    await inquirer.prompt(addDeptQuestions)
    .then((response) => {
        insertQuery = `INSERT INTO departments (name) VALUES ('${response.deptName}');`
        query(insertQuery)
        console.log(`Added ${response.deptName} to the database.`)
    })
}

module.exports = addDept