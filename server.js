const inquirer = require('inquirer')
const question = require('./lib/questions.js')
const mainAnswer = require('./lib/answers.js')

var stop = 0

async function menu() {
  const answer = await inquirer.prompt(question.mainQuestion)
  const nextQuestion = await mainAnswer(answer.todo)
  if (nextQuestion) {
    menu()
  }
}

menu()