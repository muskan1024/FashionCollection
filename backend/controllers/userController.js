const bcrypt = require("bcrypt");
const { User,validateUser } = require("../models/user");
const _ = require("lodash");
const jwt = require("jsonwebtoken");
const { AUTH_TOKEN } = require("../constants");

async function userSignIn(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send("Please enter valid Email and Password!");
  }
  let user = await User.findOne({ email });

  if (!user) {
    return res
      .status(401)
      .send("This email has not registered! Please Signup.");
  }

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(401).send("Invalid Credentials!");
  }
  const userData = {
    ...user.toObject(),
    isAuthenticated: true,
  };

  const token = jwt.sign(userData, "1@3456Qw-");
  res.header(AUTH_TOKEN, token).send(userData);
}

async function userSignUp(req, res) {
  const { error, value } = validateUser(req.body);
  if (error) {
    const errorMessage = error.details.map((detail) => detail.message).join(", ");
    return res.status(400).send(errorMessage);
  }

  let user = await User.findOne({ email: req.body.email });
  if (user) {
    return res
      .status(400)
      .send("Try any other email, this email is already registered!");
  }

  let userPhone = await User.findOne({ contactNumber: req.body.contactNumber });

  if (userPhone) {
    return res.status(400).send("Number already exists");
  }
  try {
    const salt = await bcrypt.genSalt(10);
    const user = new User({
      ...req.body,
      password: await bcrypt.hash(req.body.password, salt),
    });
    const response = await user.save();
    res.send(_.pick(response, ["fullName", "email", "_id"]));
  } catch (ex) {
    res.status(400).send(ex.message);
  }
}

module.exports = {
    userSignIn,
    userSignUp
}
