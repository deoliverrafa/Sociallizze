// Início das instâncias para trabalho com o nosso banco de dados

const assert = require('assert');
const MongoDB = require('./MongoDB')
const Context = require('./contextStrategy/contextStrategy')
const getConnection = require('./connection.js')
const userSchema = require('../schemas/userSchemas.js')
const connection = new getConnection();
let context = new Context(new MongoDB(userSchema));

// Usuário default para Teste de Crud,
const defaultUserCadastrar = {
    name: "Rafael",
    age: 18,
    phoneNumber: "63985003025",
    password: "MaisTardeFalharDoQueNãoTentar",
    email: "deoliverrafa@gmail.com"
}


// Suíte de testes realizada com o MOCHA

describe('Suíte de Testes de Usuários', function () {

    it.only("Status da Conexão", async () => {
        const result = await connection.connect()
        // status conexão 1 Conectando
        // status conexão 2 Conectado
        // status conexão 3 Desconectado
        assert.deepStrictEqual(result.readyState, 2)
    })

    it('Não Deverá cadastrar um usuário no banco de dados Pois está faltando Atributos', async () => {
        const itemIncompleto = {
            name: "Rafael",
            age: 18,
            phoneNumber: "63985003205",
        }
        const result = await context.create(itemIncompleto)

        console.log(result)
    })

    it('Deverá cadastrar um usuário no banco de dados', async () => {
        const expected = defaultUserCadastrar;
        const { name, age, email, password, phoneNumber } = await context.create(defaultUserCadastrar);
        const result = { name, age, email, password, phoneNumber }

        assert.deepStrictEqual(result, expected)
    })

    it.only('Deverá ler usuários do banco de dados', async () => {
        try {
            const expected = defaultUserCadastrar
            const [result] = await context.read()
            const actual = JSON.parse(result)
            console.log(actual)
        } catch (error) {
            console.log("Erro: ", error)
        }

    })
})