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

    it('Deverá ler usuários do banco de dados', async () => {
        try {
            const expected = defaultUserCadastrar

            const [result] = await context.read({ name: "Rafael" })

            console.log(result)
        } catch (error) {
            console.log("Erro: ", error)
        }
    })

    it("Deverá deletar um usuário do Banco de dados", async () => {
        try {
            const id = "651f044ae4dc2da61586cc29"
            const result = await context.delete({ _id: id })
            assert.deepStrictEqual(result._id, id);
        } catch (error) {
            console.log("Deu ruim man: ", error)
        }
    })

    it("Deverá atualizar um usuário já existente no Banco de dados", async () => {
        try {

            const _id = {_id: "651f0477fe15cd6219a8ac13"}
            const expected = { name: "Júlia" }

            const result = await context.update(_id, expected)

            assert.deepStrictEqual(result.name, expected.name)
        } catch (error) {
            console.log("Deu ruim man:", error)
        }
    })
})