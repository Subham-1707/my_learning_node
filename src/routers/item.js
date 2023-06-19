const express = require("express");
const Item = require("../models/Item");
const Auth = require("../middleware/auth");
const router = new express.Router();
const itemController = require("../controllers/itemController");
router.post("/items", Auth, itemController.createItem);

// Fetch an item:
router.get("/items/:id", itemController.getItemByID);

// Fetch all items:
router.get("/items", itemController.getItem);

// Update an item:
router.patch("/items/:id", Auth, itemController.updateItemByID);

// Delete an item:

router.delete("/items/:id", Auth, itemController.deleteItemByID);
module.exports = router;
