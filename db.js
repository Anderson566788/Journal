import mysql2 from 'mysql2/promise'
import env from 'dotenv'

env.config()

const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env

export const connection = await mysql2.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD, 
    database: DB_DATABASE
})

await connection.query(`CREATE DATABASE IF NOT EXISTS journal`)
