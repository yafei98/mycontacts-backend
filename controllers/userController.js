const asyncHandler = require('express-async-handler');
const User = require('..models/userModel');
//@desc Register a user
//@route Get /api/users/register
//@access public 
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
        res.status(400);
        throw new Error("User already registered!");
    }


    res.json({ message: "Register the user" })
})

//@desc Login a user
//@route Get /api/users/login
//@access public 
const loginUser = asyncHandler(async (req, res) => {
    res.json({ message: "Login user" })
})

//@desc Current user info
//@route Get /api/users/current
//@access private 
const currentUser = asyncHandler(async (req, res) => {
    res.json({ message: "Current user information" })
})






module.exports = { registerUser, loginUser, currentUser }