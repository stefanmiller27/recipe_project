const db = require('../data/db-config')

function findBy(filter) {
    return db('users')
        .where(filter)

}

function findById(user_id) {
    return db('users')
        .where(user_id)
}

async function add({ username, password }) {
    const [user_id] = await db('users').insert({ username, password })
    return findById(user_id)
}

module.exports = {
    findBy,
    add
}