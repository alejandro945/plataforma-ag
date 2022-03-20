class BasicService {
    constructor(model) {
        this.model = model;
    }
    get() {
        return this.model.findAll()
    }
    getById(id) {
        return this.model.findOne({ where: { id: id } })
    }
    add(obj, param) {
        return this.model.findOrCreate({ where: param, defaults: obj })
    }
    update(id, obj) {
        return this.model.update(obj, { where: { id: id } })
            .catch(err => { err.message })
    }
    remove() {
        return this.model.destroy({ where: { id: id } })
            .catch(err => { err.message })
    }
}

module.exports = BasicService;