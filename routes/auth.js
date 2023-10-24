const { signup } = require("../controllers/auth");
const router = require("express").Router();

router.post("/auth/signup", signup);

module.exports = router;