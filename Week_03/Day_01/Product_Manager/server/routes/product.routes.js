const productController = require("../controllers/product.controller");

module.exports = app => {
    app.get('/api/products', productController.getAll)
    app.get('/api/product/:id', productController.getOne)
    app.post('/api/product/new', productController.create)
    app.put('/api/product/update/:id', productController.update)
    app.delete('/api/product/delete/:id', productController.delete)
}