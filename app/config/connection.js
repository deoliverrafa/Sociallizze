const mongoose = require('mongoose')
const name = "deoliverrafa"
const password = "secretgames123"

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const uri = `mongodb+srv://${name}:${password}@sociallize.utxilld.mongodb.net/?retryWrites=true&w=majority`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const connection = mongoose.connect(uri,connectionParams).then(() => console.log("Connected"))
.catch((e) => console.log("Error", e))

module.exports = connection;