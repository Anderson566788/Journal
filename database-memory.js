import { randomUUID } from 'node:crypto'

export default class DatabaseMemory {
    #publish = new Map()

    list(search) {
        return Array.from(this.#publish.entries()).map(([id, data]) => ({
            id,
            ...data
        })).filter((publish) => {
            if (search) {
                return publish.title.includes(search)
            }

            return true
        })
    }

    create(publication) {
        const publishId = randomUUID()
        this.#publish.set(publishId, publication)
    }

    update(id, publication) {
        this.#publish.set(id, publication)
    }

    delete(id) {
        this.#publish.delete(id)
    }
}