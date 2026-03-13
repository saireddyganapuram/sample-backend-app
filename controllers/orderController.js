import orderModel from "../models/oderModel.js";

const placeOrder = async (req,res) => {
    const { email, orderValue, items } = req.body.orderDetails;
    const newOrder = await orderModel.create({email,orderValue,items}); 
    newOrder.save()
    res.json(newOrder)
};

const getOrders = async(req,res) => {
    const orders = await orderModel.find()
    res.json(orders)
}

export {placeOrder,getOrders}