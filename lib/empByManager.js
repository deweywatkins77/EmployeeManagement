const inquirer = require('inquirer')
const query = require('./querys.js')

let empByManagerQuery = ''
let managerList = []
let managerArray = []

async function generateLists(){
    managerList = await query('Select CONCAT(firstName, " ", lastName) as manager, id FROM employees Where id in (Select managerid FROM employees Where managerId > 0);')
    for (let i=0; i<managerList.length; i++){
        if (managerArray.indexOf(managerList[i].manager) < 0) managerArray.push(managerList[i].manager)
    }
}

var selectManagerQuestion =[
    {
        type: 'list',
        name: 'manager',
        message: 'Select a manager to view their employees.',
        choices: managerArray
    }
]

async function empByManager(){
    await generateLists()
    await inquirer.prompt(selectManagerQuestion)
    .then((response) => {
        let manager = managerList.find(item => item.manager === response.manager)
        empByManagerQuery = `Select CONCAT(firstName, " ", lastName) as Employee, roleID FROM Employees Where managerId = ${manager.id};`
        return query(empByManagerQuery)
    })
    .then((results)=>console.table(results))
}

module.exports = empByManager