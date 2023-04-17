const query = require('./querys.js')
const addEmp = require('./addEmp.js')
const addDept = require('./addDept.js')
const addRole = require('./addRole.js')
const updateEmp = require('./updateEmp.js')

var nextQuestion = 1

async function mainAnswer(response){
    switch (response){
        case 'View All Employees':
            results = await query('Select * FROM employees')
            console.table(results)
            break;
        case 'Add Employee':
            await addEmp()
            break;
        case 'Update Employee Role':
            await updateEmp()
            break;
        case 'View All Roles':
            results = await query('Select * FROM roles')
            console.table(results)
            break;
        case 'Add Role':
            await addRole()
            break;
        case 'View All Departments':
            results = await query('Select * FROM departments')
            console.table(results)
            break;
        case 'Add Department':
            await addDept()
            break;
        default:
            nextQuestion = 0
            break;
    }
    return nextQuestion
}

module.exports = mainAnswer