const Icrud = require('./interfaceCrud/crud')
const Mongoose = require('mongoose')

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
        const novoUsuario = new this._usuario(item)
        ;
        return await novoUsuario.save();
    }

    async read(item) {
        return await this._usuario.find(item);
    }

    async update(id, item) {
        return await this._usuario.findByIdAndUpdate(id, item, { new: true });
    }

    async delete(id) {
        return await this._usuario.findByIdAndRemove(id);
    }
}
module.exports = MongoDB