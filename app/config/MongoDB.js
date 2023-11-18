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

    async incrementFollowersCount(currentUserId, userIdToFollow) {
        try {

            // Encontra o usuário pelo ID no banco de dados
            const userToUpdate = await this._usuario.findById(currentUserId);
            const userToFollow = await this._usuario.findById(userIdToFollow);

            // Verifica se o usuário existe
            if (!userToUpdate) {
                throw new Error('Usuário não encontrado');
            }

            // Incrementa o contador de seguidores do usuário
            userToUpdate.Nfollowing++;
            userToFollow.Nfollowers++;

            // Salva as alterações no banco de dados
            await userToUpdate.save();
            await userToFollow.save();

            return "Seguiu com sucesso";
        } catch (error) {
            console.error('Erro ao incrementar contador de seguidores:', error);
            throw error;
        }
    }

    async decrementFollowersCount(currentUserId, userIdToUnfollow) {
        try {

            // Encontra o usuário pelo ID no banco de dados
            const userToUpdate = await this._usuario.findById(currentUserId);
            const userToUnFollow = await this._usuario.findById(userIdToUnfollow);

            // Verifica se o usuário existe
            if (!userToUpdate || !userToUnFollow) {
                throw new Error('Usuário não encontrado');
            }

            // Incrementa o contador de seguidores do usuário
            userToUpdate.Nfollowing--;
            userToUnFollow.Nfollowers--;
            // Salva as alterações no banco de dados
            await userToUpdate.save();
            await userToUnFollow.save();

            return "Deixou de Seguir";
        } catch (error) {
            console.error('Erro ao incrementar contador de seguidores:', error);
            throw error;
        }
    }
}
module.exports = MongoDB