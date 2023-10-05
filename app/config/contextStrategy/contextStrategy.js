const Icrud = require('../interfaceCrud/crud.js')

class ContextStrategy extends Icrud {
    constructor(strategy) {
        super()
        this.strategy = strategy
}
    isConnected(item) {
        return this.strategy.isConnected(item)
    }
    create(item) {
        return this.strategy.create(item)
    }
    read(item, skip, limit) {
        return this.strategy.read(item)
    }
    update(filter, item) {
        return this.strategy.update(filter, item)
    }
    delete(item) {
        return this.strategy.delete(item)
    }
}

module.exports = ContextStrategy