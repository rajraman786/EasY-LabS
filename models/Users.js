const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: "String" },
    email: { type: "String" },
    entryNo: { type: "String" },
    password: { type: "String" },
    role: { type: "String" },
});

const User = new mongoose.model("user", userSchema);

module.exports = User;
