const assert = require('assert');
const dataBaseStrategy = require('./dataBaseStrategy')
const connection = require('./connection.js')
const userSchema = require('../schemas/userSchemas.js')

const db = new dataBaseStrategy(userSchema)

const defaultUserCadastrar = {
    nome: "Rafael",
    age: 18,
    phoneNumber: "63985003205",
    password: "batatinhaquente123"
}

describe('Suíte de Testes de Usuários', () => {
    it('Deverá conectar no bacndo de dados', async () => {
        console.log(connection)
    })

    it('Deverá cadastrar um usuário no bacnod de dados', async () => {
        const result = await db.create(defaultUserCadastrar)
    })
})