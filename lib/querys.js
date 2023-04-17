const mysql = require('mysql2/promise')

async function query(query){
    const db = await mysql.createConnection({host: 'localhost',user: 'root', password: '', database: 'empmanagement'})
    const [rows, fields] = await db.execute(query)
    return await rows
}

module.exports = query