require("dotenv").config("../.env");
const axios = require("axios");

// @desc    Compiler
// route    POST /compiler
// @access  Public
exports.compiler = async (req, res, next) => {
    const { code, input, lang, langVersion } = req.body;

    try {
        const response = await axios.post("https://api.jdoodle.com/v1/execute", {
            script: code,
            stdin: input,
            language: lang,
            versionIndex: langVersion,
            clientId: "bc5828aa33ac8af193bf83fa69c47172",
            clientSecret: "2136a46bf4f1df005edf6bc5ba567d784448c9e4165116bb8f4851c23a3f706d",
        });
        res.status(200).json(response.data);
    } catch (err) {
        res.status(500).json({ message: err });
    }
};
