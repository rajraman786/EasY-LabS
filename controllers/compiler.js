require("dotenv").config("../.env");
const axios = require("axios");

require("dotenv").config("../.env");

// @desc    Compiler
// route    POST /compiler
// @access  Public
exports.compiler = async (req, res, next) => {
    const { code, input, lang, langVersion } = req.body;
    console.log(code, input, lang, langVersion);

    try {
        const response = await axios.post("https://api.jdoodle.com/v1/execute", {
            script: code,
            stdin: input,
            language: lang,
            versionIndex: langVersion,
            clientId: process.env.JDOODLE_CLIENTID,
            clientSecret: process.env.JDOODLE_CLIENTSECRET,
        });
        res.status(200).json(response.data);
    } catch (err) {
        res.status(500).json({ message: err });
    }
};
