const heroController = require("../controllers/hero.controller");

module.exports = app => {
    app.post('/api/hero/new', heroController.create)
    app.get('/api/heros', heroController.getAll)
    app.get('/api/hero/:id', heroController.getone)
    app.put('/api/hero/update/:id', heroController.update)
    app.delete('/api/hero/delete/:id', heroController.delete)
}