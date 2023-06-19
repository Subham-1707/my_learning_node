const express = require("express");
const Cart = require("../models/Cart");
const Item = require("../models/Item");
const Auth = require("../middleware/auth");
const router = new express.Router();
const {
  createCart,
  getCart,
  deleteCart,
} = require("../controllers/cartController");

// get cart:
router.get("/cart", Auth, getCart);

// create cart:
router.post("/cart", Auth, createCart);

//delete item in cart:
router.delete("/cart", Auth, deleteCart);

module.exports = router;
