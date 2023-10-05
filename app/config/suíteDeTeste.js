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
    nome: "Rafael",
    age: 18,
    phoneNumber: "63985003205",
    password: "batatinhaquente123"
}


// Suíte de testes realizada com o MOCHA

describe('Suíte de Testes de Usuários', function () {

    it("Status da Conexão", async () => {
        const result = await connection.connect()
        // status conexão 1 Conectando
        // status conexão 2 Conectado
        // status conexão 3 Desconectado
        assert.deepStrictEqual(result.readyState, 2)
    })

    it('Não Deverá cadastrar um usuário no banco de dados Pois está faltando Atributos', async () => {
        const itemIncompleto = {
            name: "Rafael",
            idade: 18,
            email: "deoliverrafa@gmail.com",
            phoneNumber: "63985003205"
        }

        const result = await context.create(itemIncompleto)
        console.log(result)
    })

    // it('Deverá ler usuários do banco de dados', async () => {

    // })
})