const Mongoose = require('mongoose')
const name = "deoliverrafa"
const password = "secretgames123"
const uri = `mongodb+srv://${name}:${password}@sociallize.utxilld.mongodb.net/?retryWrites=true&w=majority`;
const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

class getConnection {
    async connect () {
        Mongoose.connect(uri);
        const connection = Mongoose.connection        
        connection.once('open', () => console.log('DB funcionando'))
        return connection;
    }
};

module.exports = getConnection;