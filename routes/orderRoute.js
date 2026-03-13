import { placeOrder,getOrders} from "../controllers/orderController.js";
import express from "express"

const orderRouter = express.Router()

orderRouter.get("/",getOrders)
orderRouter.post("/place",placeOrder)

export default orderRouter;