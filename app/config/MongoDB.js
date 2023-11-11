const Icrud = require('./interfaceCrud/crud')

const STATUS = {
    0: 'Desconectado',
    1: 'Conectando',
    2: 'Conectado',
    3: 'Desconectando'
}
class MongoDB extends Icrud {
    constructor(schema) {
        super();
        this._usuario = schema
    }

    async isConnected() {
        const state = STATUS[this._connection.readyState];

        console.log("Estado da Conexão", state);
        if (state === 'Conectado') return state;

        if (state !== 'Conectando') return state;

        await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 1000);
        });

        return STATUS[this._connection.readyState];
    }

    async create(item) {
        try {
            const novoUsuario = new this._usuario(item);
            const usuarioCriado = await novoUsuario.save();
            return usuarioCriado;
        } catch (error) {
            console.error('Erro ao criar usuário:', error);
            throw error; // Rejogua o erro para que possa ser tratado em outro lugar, se necessário
        }
    }    
    
    async read(item) {
        const result = await this._usuario.find(item).limit(10);
        return result;
    }

    async update(id, item) {
        return await this._usuario.findByIdAndUpdate(id, item, { new: true });
    }

    async delete(id) {
        const result = await this._usuario.findByIdAndRemove(id);
        if (result == null) return "Usuário não encontrado Tente Novamente!!!"
        console.log("Usuário deletado Com Sucesso!!!")
        return result;
    }
}
module.exports = MongoDB