const inquirer = require('inquirer')
const query = require('./querys.js')

let deptArray =[]
let insertQuery = ''
let deptList = []

async function generateLists(){
    deptList = await query('Select name, id FROM departments')
    for (let i=0; i<deptList.length; i++){
        deptArray.push(deptList[i].name)
    }
}

generateLists()

var addRoleQuestions =[
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the Role?'
    },
    {
        type: 'input',
        name: 'salary',
        message: 'What is the salary for the role?'
    },
    {
        type: 'list',
        name: 'dept',
        message: 'Which department does the role belong to?',
        choices: deptArray
    }
]

async function addRole(){
    await inquirer.prompt(addRoleQuestions)
    .then((response) => {
        let dept = deptList.find(item => item.name === response.dept)
        response.dept = dept.id
        let values = `'${response.dept}','${response.name}','${response.salary}'`
        insertQuery = `INSERT INTO roles (deptId,title,salary) VALUES (${values});`
        query(insertQuery)
        console.log(`Added ${response.name} to the database.`)
    })
}

module.exports = addRole