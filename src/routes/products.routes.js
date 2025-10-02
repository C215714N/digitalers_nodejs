import { Router } from "express";
import * as prodController from "../controllers/products.controllers.js"

const productsRouter = Router();

// productsRouter.post("/", prodController.createProduct)
productsRouter.get("{/:id}", prodController.findProduct)
// productsRouter.get("/search", prodController.filterProduct)
// productsRouter.put("/:id", prodController.updateProduct)
// productsRouter.delete("/:id",prodController.deleteProduct)

export default productsRouter