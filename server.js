const inquirer = require('inquirer')
const question = require('./lib/questions.js')
const selectAll = require('./lib/querys.js')
const mainAnswer = require('./lib/answers.js')

async function log(){
  console.table(await selectAll('departments'))
}

inquirer.prompt(question.mainQuestion)
  .then((response) => {mainAnswer(response)})
  .then((response) => {log()})