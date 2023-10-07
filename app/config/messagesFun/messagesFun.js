class MessageFun{

    constructor(db){
        this.db = db;
    }

    async send(senderId, recipientId, Message, expirationTime) {

        const result = await this.db.save();

        return result
    }
}