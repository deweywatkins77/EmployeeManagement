const mysql = require('mysql2/promise')

async function query(query){
    const db = await mysql.createConnection({host: 'localhost',user: 'root', password: 'root', database: 'empmanagement'})
    const [rows, fields] = await db.execute(query)
    return await rows
}

async function selectAll(table){
    const db = await mysql.createConnection({host: 'localhost',user: 'root', password: 'root', database: 'empmanagement'})
    const [rows, fields] = await db.execute(`Select * FROM ${table}`)
    console.table(rows)
}

module.exports = query