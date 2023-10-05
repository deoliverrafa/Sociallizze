class NotImplementedException extends Error {

    constructor() {
        super('Not implemented Exception')
    }
}

class Icrud {

    create(item) {
        throw new NotImplementedException()
    }
    read(item) {
        throw new NotImplementedException()
    }
    update(item) {
        throw new NotImplementedException()
    }
    delete(item) {
        throw new NotImplementedException()
    }
}

module.exports = Icrud