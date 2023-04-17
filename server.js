const inquirer = require('inquirer')
const mainAnswer = require('./lib/answers.js')

var mainQuestion = [
  {
      type: 'list',
      name: 'todo',
      message: 'What would you like to do?',
      choices: ['View All Employees', 
      'Add Employee',
      'Update Employee Role',
      'View All Roles',
      'Add Role',
      'View All Departments',
      'Add Department'
      ]
  }
]

async function menu() {
  const answer = await inquirer.prompt(mainQuestion)
  const nextQuestion = await mainAnswer(answer.todo)
  if (nextQuestion) {
    menu()
  }
}

menu()