const bcrypt = require("bcryptjs");
const User = require('./models/User');
const signup = async (req, res, next) => {
  try {
    //Validate user input
    if (!req.body.username && !req.body.email && !req.body.password) {
      res.status(400).send("Complete user information required");
    }
    //Check if user is an existing user
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser ) {
      res.status(400).send("User acount already exists.");
    }
    // //Hash user password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    // //Save user record into the db
    const newUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    let newUserObj = newUser.toObject();
    const { password, id, ...rest } = newUserObj;
    //Return response
    return res.status(201).json({
      status: "success",
      user: rest
    });
  } catch (e) {
    console.log(e.message)
  }
};

module.exports = { signup };