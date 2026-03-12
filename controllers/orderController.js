import orderModel from "../models/oderModel.js";

const placeOrder = (req,res) => {
    const { email, orderValue, items } = req.body;
    const newOrder = new orderModel({email,orderValue,items,}); 
    newOrder.save()
    res.json(newOrder)
};

export {placeOrder}