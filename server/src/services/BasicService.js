class BasicService {
    constructor(model) {
        this.model = model;
    }
    get() {
        return this.model.findAll()
            .catch(new Error("Problemas en el servidor"));
    }
    getById(id) {
        return this.model.findOne({ where: { id: id } })
            .catch(err => { err.message });
    }
    add(obj) {
        this.model.scope({ method: ['contrast', obj] }).findOrCreate()
            .catch(err => { err.message })
    }
    update(id, obj) {
        this.model.update(obj, { where: { id: id } })
            .catch(err => { err.message })
    }
    remove() {
        this.model.destroy({ where: { id: id } })
            .catch(err => { err.message })
    }
}

module.exports = BasicService;