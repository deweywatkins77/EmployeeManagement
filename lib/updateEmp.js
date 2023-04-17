const inquirer = require('inquirer')
const query = require('./querys.js')

let roleArray = []
let empArray = []
let updateQuery = ''
let empList = []
let roleList = []

async function generateLists(){
    roleList = await query('Select title, id FROM roles')
    empList = await query('Select CONCAT(firstName, " ", lastName) as emp, id FROM employees')
    for (let i=0; i<roleList.length; i++){
        roleArray.push(roleList[i].title)
    }
    for (let i=0; i<empList.length; i++){
        empArray.push(empList[i].emp)
    }
}

var updateEmpQuestions =[
    {
        type: 'list',
        name: 'emp',
        message: 'Which employees role would you like to update?',
        choices: empArray
    },
    {
        type: 'list',
        name: 'role',
        message: 'Which role do you want to assign to the employee?',
        choices: roleArray
    }
]

async function updateEmp(){
    await generateLists()
    await inquirer.prompt(updateEmpQuestions)
    .then((response) => {
        let emp = empList.find(item => item.emp === response.emp)
        response.emp = emp.id
        let role = roleList.find(item => item.title === response.role)
        response.role = role.id
        updateQuery = `UPDATE employees SET roleId = '${response.role}' Where id = ${response.emp};`
        query(updateQuery)
        console.log(`Updated ${emp.emp} role in the database.`)
    })
}

module.exports = updateEmp