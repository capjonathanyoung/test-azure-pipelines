const express = require("express");

const port = process.env.port || 3000;

const app = express();

app.get("/", async (req, res) => {
    res.send("I'm alive");
});

app.listen(port, () => {
    console.info("server running");
});
