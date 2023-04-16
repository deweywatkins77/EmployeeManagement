const express = requirer('express')
const db = requirer('mysql2')
const inquirer = require('inquirer')
const app = express()

 var mainQuestions = [
    {
      type: 'maxlength-input',
      name: 'text',
      message: 'What three letters would you like displayed',
      maxLength: 3
    },
    {
      type: 'input',
      name: 'textColor',
      message: "What color would you like your text to be? \n(Type in a color, or hexadecimal value)",
    },
    {
      type: 'list',
      name: 'shape',
      message: 'What shape would you like for your logo?',
      choices: ['Square', 'Triangle', 'Circle', 'Ellipse'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: "What color would you like your shape to be? \n(Type in a color, or hexadecimal value)",
    },
  ]

  inquirer.prompt(questions).then((inquirerResponses) => {
    writeToFile('logo.svg', generateSVG({ ...inquirerResponses }));
  });