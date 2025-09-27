import mongoose from "mongoose";

const INT = {
    type: Number,
    default: 0,
    min: 0,
    max: 9e36,
    required: true,
}
const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description:{ 
        type: String,
        min: 10,
        max: 150,
    },
    price: INT,
    stock: INT,
});
export const ProductsModel = mongoose.model("products", ProductSchema);