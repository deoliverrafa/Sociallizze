class dataBaseStrategy{
    constructor(database){
        this.database = database;
    }

    create(user = {}){
    return this.database.create(user);
    }

    update(user = {}){
    return this.database.update(user)
    }

    read(user = {}){
    return this.database.read(user)
    }

    delete(user = {}){
    return this.database.delete(user)
    }
}

module.exports = dataBaseStrategy;