import express from 'express'
import env from 'dotenv'
// import DatabaseMemory from './database-memory.js'
import DatabaseMySQL from './database-mysql.js'

// const database = new DatabaseMemory()
const database = new DatabaseMySQL()

env.config()

const app = express()
app.use(express.json())

app.post('/publish', async (req, res) => {
    const { title, author, text } = req.body

    const id = await database.create({ title, author, text })

    const newPublish = { id, title, author, text }

    return res.status(201).json(newPublish)
})

app.get('/publish', async (req, res) => {
    const search = req.query.search

    const publishes = await database.list(search)

    res.json(publishes)
})

app.put('/publish/:id', async (req, res) => {
    const publishId = req.params.id

    const { title, author, text } = req.body

    await database.update(publishId, { title, author, text })

    res.status(204).end()

})

app.delete('/publish/:id', async (req, res) => {
    const publishId = req.params.id
    
    await database.delete(publishId)

    res.status(204).end()
})

const port = process.env.PORT
app.listen(port)
// app.listen(port, () => console.log("Server running on port: " + port))