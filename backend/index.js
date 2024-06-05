const express = require("express");
const { userSignIn, userSignUp } = require("./controllers/userController");
const router = express.Router();

router.post("/api/auth/user/login", userSignIn);
router.post("/api/auth/user/signup", userSignUp);

module.exports = router;