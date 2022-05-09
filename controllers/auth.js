const UserDB = require("../models/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config("../.env");

const JWT_SECRET = process.env.JWT_SECRET;

// @desc    Allow users to sign up
// route    POST /auth/signup
// @access  Public
exports.signup = (req, res, next) => {
    const { name, email, entryNo, password, role } = req.body;

    UserDB.findOne({ email })
        .then(async (val) => {
            if (val) {
                return res.status(409).json({
                    success: false,
                    errorMessage: "User already using this email, try different email",
                });
            } else {
                UserDB.create({
                    name,
                    email,
                    entryNo,
                    password: await bcrypt.hash(password, 10),
                    role,
                })
                    .then(() => {
                        return res.status(201).json({
                            success: true,
                            successMessage: "Successfully Registered",
                        });
                    })
                    .catch((err) => {
                        if (err.errors) {
                            return res.status(422).json({
                                success: false,
                                errorMessage: "Please Check Your Inputs again",
                            });
                        } else {
                            return res.status(500).json({
                                success: false,
                                errorMessage: "Internal Server Error",
                                error: err,
                            });
                        }
                    });
            }
        })
        .catch((err) => {
            return res.status(500).json({
                sucess: false,
                errorMessage: "Internal Server Error, please try again sfter some time",
                error: err,
            });
        });
};

// @desc    Allow users to sign in
// route    POST /auth/login
// @access  Public
exports.login = (req, res, next) => {
    const { email, entryNo, password } = req.body;

    if (email) {
        UserDB.findOne({ email }).then(async (user) => {
            if (user) {
                if (await bcrypt.compare(password, user.password)) {
                    return res.status(200).json({
                        success: true,
                        successMessage: "Successfully Logged-in",
                        token: jwt.sign(
                            {
                                id: user._id,
                                email: user.email,
                            },
                            JWT_SECRET
                        ),
                    });
                } else {
                    return res.status(404).json({
                        success: false,
                        errorMessage: "Incorrect Email/Password",
                    });
                }
            } else {
                return res.status(404).json({
                    success: false,
                    errorMessage: "Incorrect Email/Password",
                });
            }
        });
    } else if (entryNo) {
        UserDB.findOne({ entryNo }).then(async (user) => {
            if (user) {
                if (await bcrypt.compare(password, user.password)) {
                    return res.send(200).json({
                        success: true,
                        successMessage: "Successfully logged in into account",
                        token: jwt.sign(
                            {
                                id: user._id,
                                email: user.email,
                            },
                            JWT_SECRET
                        ),
                    });
                } else {
                    return res.status(404).json({
                        success: false,
                        errorMessage: "Incorrect Entry Number/Password",
                    });
                }
            } else {
                return res.status(404).json({
                    success: false,
                    errorMessage: "Incorrect Entry Number/Password",
                });
            }
        });
    }
};
