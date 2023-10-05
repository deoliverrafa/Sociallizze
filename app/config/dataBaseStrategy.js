class dataBaseStrategy{
    constructor(userSchema){
        this._userSchema = userSchema;
    }

    create(item){
    return this.userSchema.create(item);
    }

    update(user = {}){
    return this.userSchema.update(user)
    }

    read(user = {}){
    return this.userSchema.read(user)
    }

    delete(user = {}){
    return this.userSchema.delete(user)
    }
}

module.exports = dataBaseStrategy;