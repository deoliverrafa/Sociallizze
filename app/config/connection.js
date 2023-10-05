const Mongoose = require('mongoose')
const name = "deoliverrafa"
const password = "secretgames123"
const uri = `mongodb+srv://${name}:${password}@sociallize.utxilld.mongodb.net/?retryWrites=true&w=majority`;
const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

// Aqui fazemos a connection com o banco de dados
// através do mongoose que é um framework que trabalha com
// banco de dados NoSQL
class getConnection {
    async connect () {
        Mongoose.connect(uri);
        const connection = Mongoose.connection        
        connection.once('open', () => console.log('DB funcionando'))
        return connection;
    }
};

module.exports = getConnection;