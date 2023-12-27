import  express  from "express";
import routes from "./modules/products.routes.js"
import cors from "cors"

const app = express();

const PORT = 8080
app.use(cors());
app.use(express.json());
app.use(routes);



app.listen(PORT, ()=>{
    console.log("server is running....!");
}) 