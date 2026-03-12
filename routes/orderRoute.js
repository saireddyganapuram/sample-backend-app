import { placeOrder } from "../controllers/orderController.js";
import express from "express"

const orderRouter = express.Router()

orderRouter.post("/place",placeOrder)

export default orderRouter;