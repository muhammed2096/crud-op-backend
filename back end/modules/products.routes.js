import  express from "express";
import { addProduct, deleteProduct, getAllProducts, getById, updateProduct, homePage } from "./products.controller.js";
const routes = express.Router()




routes.get("/", homePage)
routes.get("/products", getAllProducts)
routes.post("/products", addProduct)
routes.delete("/products", deleteProduct)
routes.put("/products", updateProduct)
routes.get("/products/:id", getById)


export default routes