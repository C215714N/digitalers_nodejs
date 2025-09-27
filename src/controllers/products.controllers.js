import { ProductsModel } from "../models/products.model.js"

export const createProduct = (req, res) => {
    const newProduct = new ProductsModel(req.body);
    newProduct.save()
        .then(data => res.json({ message: `producto agregado`, data }))
        .catch(err => res.json({ message: err.message }))
}
export const findProduct = (req, res) => {
    ProductsModel.find()
        .then(data => res.json(data))
        .catch(err => res.json({ message: err.message }))
}
export const updateProduct = (req, res) => {
    const filter = { _id: req.params.id };
    const update = req.body;
    ProductsModel.updateOne(filter, update)
        .then(data => res.json({ message: `producto actualizado`, data }))
        .catch(err => res.json({ message: err.message }))
}
export const deleteProduct = (req, res) => {
    const filter = { _id: req.params.id };
    ProductsModel.deleteOne(filter)
        .then(data => res.json({ message: `producto eliminado`}))
        .catch(err => res.json({ message: err.message }))
}