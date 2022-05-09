const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: "String",
        trim: true,
        required: [true, "Empty Name Field"],
        match: [/[A-Z][a-z]\s*/, "Invalid Name"],
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: [true, "Empty Email Field"],
        match: [/^[a-z0-9.]+@smvdu.ac.in$/, "Invalid Email"],
    },
    entryNo: {
        type: "String",
        trim: true,
        // unique: true,
        lowercase: true,
        // required: false,
        // match: [/^$|\d{2}[a-z]{3}\d{3}$/, "Invalid Entry Number"],
    },
    password: {
        type: "String",
        required: [true, "Empty Password Field"],
    },
    role: {
        type: "String",
        trim: true,
        required: [true, "Empty Role Field"],
        match: [/[A-Z][a-z]*/, "Invalid Role"],
    },
});

const User = new mongoose.model("user", userSchema);

User.createIndexes();

module.exports = User;
