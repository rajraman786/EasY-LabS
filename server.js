const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Up and running");
});

const PORT = process.env.PORT || 4509;

app.listen(PORT, console.log(`Server is up and running at port ${PORT}`))