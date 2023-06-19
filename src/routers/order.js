const express = require("express");
const Flutterwave = require("flutterwave-node-v3");
const Order = require("../models/Order");
const Cart = require("../models/Cart");
const User = require("../models/User");
const Auth = require("../middleware/auth");
const orderController = require("../controllers/orderController");
const router = new express.Router();

const flw = new Flutterwave(
  process.env.FLUTTERWAVE_V3_PUBLIC_KEY,
  process.env.FLUTTERWAVE_V3_SECRET_KEY
);
//get orders

router.get("/orders", Auth, orderController.getorders);

//checkout
router.post("/order/checkout", Auth, orderController.checkout_orders);

module.exports = router;

// {
//     "card_number": "5531886652142950",
//     "cvv": "564",
//     "expiry_month": "09",
//     "expiry_year": "32",
//     "currency": "NGN",
//     "amount": "100",
//     "redirect_url": "https://www.google.com",
//     "fullname": "Bassit Owolabi",
//     "email": "barsee@gmail.con",
//     "phone_number": "0902620185",
//     "enckey": "",
//     "tx_ref": "MC-32444ee--4eerye4euee3rerds4423e43e"
// }
