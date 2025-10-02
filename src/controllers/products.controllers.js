import appData from "../data/appdata.json" with { type: "json" }
import products from "../data/products.json" with { type: "json" }

export const findProduct = (req, res) => {
    res.render('index', {
        ...appData,
        products
    })
} 