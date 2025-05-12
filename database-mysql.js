import { randomUUID } from 'node:crypto'
import { connection } from './db.js'

export default class DatabaseMySQL {
    async list(search) {
        let query = `SELECT * from publication`
        let values = []

        if (search) {
            query += ` WHERE title like ?`
            values.push(`%${search}%`)
        }

        const [rows] = await connection.query(query, values)
        return rows
    }

    async create(publication) {
        const publishId = randomUUID()
        const { title, author, text } = publication

        const query = `INSERT into publication (id, title, author, text) values (?, ?, ?, ?)`
        const values = [publishId, title, author, text]

        await connection.query(query, values)
    }

    async update(id, publication) {
        const { title, author, text } = publication

        const query = `UPDATE publication SET title = ?, author = ?, text = ? WHERE id = ?`
        const values = [title, author, text, id]

        await connection.query(query, values)

    }

    async delete(id) {
        const query = `delete from publication where id = ?`
        const values = [id]

        await connection.query(query, values)
    }
}