const UserDB = require("../models/Users");
const bcrypt = require("bcrypt");

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
