const inquirer = require('inquirer')
const query = require('./querys.js')

let roleArray = []
let managerArray =['No Manager']
let insertQuery = ''
let managerList = []

async function generateLists(){
    roleList = await query('Select title FROM roles')
    managerList = await query('Select CONCAT(firstName, " ", lastName) as name, id FROM employees where id in (select id from employees where managerId > 0)')
    for (let i=0; i<roleList.length; i++){
        roleArray.push(roleList[i].title)
    }
    for (let i=0; i<managerList.length; i++){
        managerArray.push(managerList[i].name)
    }
}

generateLists()

var addEmpQuestions =[
    {
        type: 'input',
        name: 'firstName',
        message: 'What is the employees first name?'
    },
    {
        type: 'input',
        name: 'lastName',
        message: 'What is the employees last name?'
    },
    {
        type: 'list',
        name: 'role',
        message: 'What is the employees role?',
        choices: roleArray
    },
    {
        type: 'list',
        name: 'manager',
        message: 'What is the managers name?',
        choices: managerArray
    }
]

async function addEmp(){
    await inquirer.prompt(addEmpQuestions)
    .then((response) => {
        if (response.manager === 'No Manager') {
            response.manager = 0
        }else{
            let name = managerList.find(item => item.name === response.manager )
            response.manager = name.id
        }
        let values = `'${response.firstName}','${response.lastName}','${roleArray.indexOf(response.role) + 1}','${response.manager}'`
        insertQuery = `INSERT INTO employees (firstName,lastName,roleId,managerId) VALUES (${values});`
        query(insertQuery)
        console.log(`Added ${response.firstName} ${response.lastName} to the database.`)
    })
}

module.exports = addEmp