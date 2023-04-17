const mysql = require('mysql2/promise')

async function selectAll(table){
    const db = await mysql.createConnection({host: 'localhost',user: 'root', password: 'root', database: 'empmanagement'})
    const [rows, fields] = await db.execute(`Select * FROM ${table}`)
    console.table(rows)
}

module.exports = selectAll