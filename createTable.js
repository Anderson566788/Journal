import  { connection } from "./db.js"

try {
    await connection.query(`
    CREATE TABLE IF NOT EXISTS publication (
    id VARCHAR(36) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255),
    text TEXT NOT NULL
    )    
    `)
    console.log('Tabela publication criada com sucesso!')
    process.exit(0)
} catch (err) {
    console.log('Erro ao criar tabela: ', err)
    process.exit(1)
}