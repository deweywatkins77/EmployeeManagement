const selectAll = require('./querys.js')

var table = ''
var nextQuestion = 0

async function mainAnswer(response){
    switch (response){
        case 'View All Employees':
            table = 'employees'
            await selectAll(table)
            nextQuestion = 1
            break;
        default:
            break;
    }
    return nextQuestion
}

module.exports = mainAnswer